import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthRole, AuthUser } from '../models/auth.models';
import { RoleService } from './roles/role.service';
import { PermissionOperation } from '@/backend/auth/authorizations/permission-operation.enum';
import { ResourceType } from '@/backend/auth/authorizations/resource-type.enum';
import { Permission } from '@/backend/auth/authorizations/permission.models';
import { Role } from '@/backend/auth/authorizations/roles/role.enum';

@Injectable()
export class PermissionService {
  private readonly logger = new Logger(PermissionService.name);

  constructor(private readonly roleService: RoleService) {}

  /**
   * Vérifie l'autorisation de l'utilisateur sur une ressource
   * @param user
   * @param operation
   * @param resourceType type de la ressource
   * @param resourceId identifiant de la ressource, null si resourceType = PLATEFORME
   * @param doNotThrow vrai pour ne pas générer une erreur si l'utilisateur n'a pas l'autorisation
   */
  async isAllowed(
    user: AuthUser,
    operation: PermissionOperation,
    resourceType: ResourceType,
    resourceId: number | null,
    doNotThrow?: boolean
  ): Promise<boolean> {
    this.logger.log(
      `Vérification que l'utilisateur ${user.id} possède l'autorisation ${operation} sur la ressource ${resourceType} ${resourceId}`
    );
    if (user.role === AuthRole.SERVICE_ROLE) {
      // Le service rôle à tous les droits
      return true;
    }

    // Récupère les rôles de l'utilisateur pour la ressource donnée
    const roles = await this.roleService.getUserRoles(
      user,
      resourceType,
      resourceId
    );

    if (roles.length == 0) {
      this.logger.log(
        `L'utilisateur ${user.id} n'a pas de rôles sur la ressource ${resourceType} ${resourceId}`
      );
      if (doNotThrow) {
        return false;
      }
      throw new UnauthorizedException(`L'utilisateur n'a pas de rôles`);
    }

    // Récupère les autorisations des rôles de l'utilisateur
    const operations: Set<PermissionOperation> = new Set();
    for (const role of roles) {
      Permission[role as Role].forEach((permission) =>
        operations.add(permission)
      );
    }

    this.logger.log(
      `L'utilisateur ${user.id} possède les autorisations ${JSON.stringify([
        ...operations,
      ])} sur la ressource ${resourceType} ${resourceId}`
    );

    // Vérifie si l'opération demandée est dans la liste des autorisations de l'utilisateur
    const hasTheRight = operations.has(operation);
    if (!hasTheRight) {
      this.logger.log(
        `L'utilisateur ${user.id} ne possède pas l'autorisation ${operation} sur la ressource ${resourceType} ${resourceId}`
      );
      if(!doNotThrow){
        throw new UnauthorizedException(
          `Droits insuffisants, l'utilisateur ${user.id} n'a pas l'autorisation ${operation} sur la ressource ${resourceType} ${resourceId}`
        );
      }
    }else{
      this.logger.log(
        `L'utilisateur ${user.id} possède l'autorisation ${operation} sur la ressource ${resourceType} ${resourceId}`
      );
    }

    return hasTheRight;
  }
}