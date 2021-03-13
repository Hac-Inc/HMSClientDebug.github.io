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
                                s.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleResc/XrayGogglesResc.js";
                                document.head.appendChild(s);
                                break;
                        case "dev":
                                let d = document.createElement('script');
                                s.src = "ClientBase/ModuleResc/XrayGogglesResc.js";
                                document.head.appendChild(s);
                                break;
                        case "liveDebug":
                                let ld = document.createElement('script');
                                s.src = "https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/ModuleResc/XrayGogglesResc.js";
                                document.head.appendChild(s);
                                break;
                }
        }
}