import get_template from "../../components/get_template.js";

export default {
    data: function() {
        return {
            mostrarModal: false,
            activeIndex: -1,
            faqItems: [{
                pergunta: "Quem pode se inscrever nos cursos?",
                resposta: "Qualquer pessoa interessada em adquirir conhecimentos técnicos pode se inscrever. Não é necessário ter experiência prévia em alguns cursos básicos."
            }, {
                pergunta: "Os cursos têm certificado?",
                resposta: "Sim. Todos os cursos são certificados por um centro reconhecido pelo INEFOP, garantindo validade e reconhecimento no mercado de trabalho."
            }, {
                pergunta: "Qual é a duração dos cursos?",
                resposta: "A duração varia conforme o curso, podendo ser de algumas semanas até meses, dependendo da especialização escolhida."
            }, {
                pergunta: "Como faço a inscrição?",
                resposta: "Você pode se inscrever preenchendo o formulário no site e enviando os dados via WhatsApp."
            }, {
                pergunta: "As aulas são presenciais ou online?",
                resposta: "Atualmente, as aulas são presenciais, com componente prática para melhor aprendizagem."
            }]
        };
    },

    methods: {

        toggle: function(index) {
            // Se clicar no que já está aberto, fecha tudo (-1), senão abre o novo índice
            this.activeIndex = this.activeIndex === index ? -1 : index;
        },

        abrirModal() {
            this.mostrarModal = true;
        },
        fecharModal() {
            this.mostrarModal = false;
        }

    },

    async mounted() {


    },
    template: await get_template("./assets/js/view/home/home"),
};