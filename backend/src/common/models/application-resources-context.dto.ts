/**
 *
 */
export interface ApplicationResourcesContext {
  // Due to Signoz parsing we have to use a dot
  'service.name'?: string;
  version?: string;

  'service.version'?: string;

  environment?: string;
}
