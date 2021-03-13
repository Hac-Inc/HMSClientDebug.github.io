class XrayGoggles extends module {
        constructor() {
                super(module);
                this.ModuleId = "XrayGoggles";
                this.ModuleName = "XRay Goggles";
                this.category = "dev_tools";
                this.tooltip = "Activates Xray Goggles";
        }
        execute() {
                switch(injectMode) {
                        case "live":
                                let l = document.createElement('script');
                                l.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleResc/XrayGogglesResc.js";
                                document.head.appendChild(s);
                                break;
                        case "dev":
                                let d = document.createElement('script');
                                d.src = "ClientBase/ModuleResc/XrayGogglesResc.js";
                                document.head.appendChild(s);
                                break;
                        case "liveDebug":
                                let ld = document.createElement('script');
                                ld.src = "https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/ModuleResc/XrayGogglesResc.js";
                                document.head.appendChild(s);
                                break;
                }
        }
}
