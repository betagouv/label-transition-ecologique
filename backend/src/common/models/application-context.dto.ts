import { AuthRole } from '../../auth/models/auth.models';
import { ApplicationResourcesContext } from './application-resources-context.dto';
import { ApplicationScopeContext } from './application-scope-context.dto';

/**
 *
 */
export interface ApplicationContext {
  resources?: ApplicationResourcesContext;

  /**
   * Name of the logger
   */
  context?: string;

  scope: ApplicationScopeContext;

  correlationId?: string;

  requestPath?: string;

  authRole?: AuthRole;
  userId?: string;

  // When authenticating with a service account
  serviceAccountId?: string;

  // Error stack
  stacktrace?: string;
}
