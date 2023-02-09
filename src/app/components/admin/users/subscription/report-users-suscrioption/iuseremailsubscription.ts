/**
 * Подписка пользователя
 */
export interface Iuseremailsubscription {
  id: number;
  serverName: string;
  clusterName: string;
  reportId: number;
  userId: number;
  enabled: number;
  lastSend: Date


  windowInterval: number;
  timeToSendHour: number;

  timeToSendMinute: number;
  userInfoId: number;
  userName: string;
  userEmail: string;
  isActive: number;
  login: string;
  dbmsReportTemplateIs: number;
  dbmsReportTemplateName: string;
  dbmsReportTemplateCode: string;
}

export class DbmsServer {
  id?: number;
  server_name?: string;
}
