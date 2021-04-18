import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NavigatorModule} from "./app/navigator/navigator.module";

import {environment} from "./environments/environment";

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(NavigatorModule)
	.catch(err => console.error(err));
