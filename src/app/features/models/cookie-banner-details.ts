export interface CookieBannerDetails {
    bannerId: number;
    accordian: Accordian[];
    created: string;
    lastUpdated: string;
}

interface Accordian {
    localization: string;
    categoyId: number;
    categoyHeading: string;
    isMandatory: boolean;
    categoyText: string;
    pluginList: PluginList[];
    extraSettings: string;
    isCollapsed: boolean;
}

interface PluginList {
    complianceType: string;
    complianceTypeID: number;
    blockingEnabled: boolean;
    pluginDomain: string;
    cName: string;
    optOutExternalLink?: string;
}
