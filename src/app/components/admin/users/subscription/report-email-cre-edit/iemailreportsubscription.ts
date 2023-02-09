export interface Iemailreportsubscription {
  id:number
  server_name:string
  cluster_name:string
  report_id:number
  user_id :number
  enabled:number
  last_send:number
  window_interval:number
  time_to_send_hour:number
  time_to_send_minute:number
}

export class Emailreportsubscription {

  id:number
  server_name:string
  cluster_name:string
  report_id:number
  user_id :number
  enabled:number
  last_send:number
  window_interval:number
  time_to_send_hour:number
  time_to_send_minute:number


  constructor(id: number,
              server_name: string,
              cluster_name: string,
              report_id: number,
              user_id: number,
              enabled: number,
              last_send: number,
              window_interval: number,
              time_to_send_hour: number,
              time_to_send_minute: number) {
    this.id = id
    this.server_name = server_name
    this.cluster_name = cluster_name
    this.report_id = report_id
    this.user_id = user_id
    this.enabled = enabled
    this.last_send = last_send
    this.window_interval = window_interval
    this.time_to_send_hour = time_to_send_hour
    this.time_to_send_minute = time_to_send_minute

  }
}
