import {InjectionToken} from '@angular/core';
import {BehaviorSubject} from "rxjs";
export const ZITI_DOMAIN_CONTROLLER = new InjectionToken<any>('ZITI_DOMAIN_CONTROLLER');

export type ZitiSessionData = {
    ztDomain: any,
    ztSessionId: any,
    expiresAt: any
}
export interface ZitiDomainControllerService {
    ztSettings: BehaviorSubject<ZitiSessionData>;
    handleUnauthorized();
}
