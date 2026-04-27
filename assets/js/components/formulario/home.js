import get_template from "../get_template.js";
import {
    bus
} from "../bus.js"; // ajuste caminho

export default {
    data: function() {
        return {
            form: {
                nome: '',
                email: '',
                telefone: '',
                provincia: '',
                categoria: '',
                curso: '',
                pacote: '',
                mensagem: ''
            }
        };
    },

    methods: {
        enviarWhatsApp() {

            if (!this.form.nome || !this.form.telefone) {
                alert("Preencha Nome e Telefone!");
                return;
            }

            const texto = `*Nova Inscrição no ACADEMIA HCENGINEERS*

*Nome:* ${this.form.nome}
*Email:* ${this.form.email}
*Telefone:* ${this.form.telefone}
*Província:* ${this.form.provincia}
*Categoria:* ${this.form.categoria}
*Curso:* ${this.form.curso}
*Pacote:* ${this.form.pacote}
*Mensagem:* ${this.form.mensagem}

Por favor, entre em contacto para confirmar minha inscrição. Obrigado!`;

            const numero = "244900000000"; // 👉 teu número

            const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

            window.open(url, '_blank');
        }

    },


    created() {

    },

    mounted() {

    },

    template: await get_template("./assets/js/components/formulario/home"),
};