import * as Vue from "vue";
import Component from "vue-class-component";
import "../../dist/vue";
import { data } from "../common";

@Component({
    template: `
    <div>
        <a href="https://github.com/plantain-00/tour-component/tree/master/demo/vue/index.ts" target="_blank">the source code of the demo</a>
        <br/>
        <tour :data="data">
        </tour>
    </div>
    `,
})
class App extends Vue {
    data = data;
}

// tslint:disable-next-line:no-unused-expression
new App({ el: "#container" });
