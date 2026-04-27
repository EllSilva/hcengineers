import get_template from "../../components/get_template.js";
import { bus } from "../../components/bus.js"; // ajuste caminho

export default {
    data: function() {
        return {
            mostrarModal: false
        };
    },

    methods: {
        abrirModal() {
            this.mostrarModal = true;
        },
        fecharModal() {
            this.mostrarModal = false;
        }
    },


    created() {

    },

    mounted() {

    },

    template: await get_template("./assets/js/components/menu/home"),
};