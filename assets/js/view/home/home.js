import get_template from "../../components/get_template.js";

export default {
    data: function() {
        return {
            mostrarModal: false,
            activeIndex: -1,

            currentIdx: 3,
            transitioning: true,
            cardWidth: 350, // largura (320) + margens (15+15)
            rawSlides: [{
                img: './assets/img/gallery/1.jpeg'
            }, {
                img: './assets/img/gallery/2.jpeg'
            }, {
                img: './assets/img/gallery/3.jpeg'
            }, {
                img: './assets/img/gallery/4.jpeg'
            }, {
                img: './assets/img/gallery/5.jpeg'
            }, {
                img: './assets/img/gallery/6.jpeg'
            }, {
                img: './assets/img/gallery/8.jpeg'
            }, {
                img: './assets/img/gallery/003.jpeg'
            }, {
                img: './assets/img/gallery/004.jpeg'
            }, {
                img: './assets/img/gallery/005.jpeg'
            }, {
                img: './assets/img/gallery/006.jpeg'
            }, {
                img: './assets/img/gallery/007.jpeg'
            }],
            displaySlides: [],


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
            }],

            cursos: [{
                id: 1,
                categoria: 'Engenharia Civil',
                titulo: 'Medições e Orçamentos - MO',
                preco: '49.900',
                descricao: 'Descrição do curso...',
                imagem: './assets/img/gallery/1.jpeg'
            }, {
                id: 2,
                categoria: 'Engenharia Civil',
                titulo: 'Fiscalização de Obras - FO',
                preco: '32.900',
                descricao: 'Descrição do curso...',
                imagem: './assets/img/gallery/2.jpeg'
            }, {
                id: 3,
                categoria: "Arquitetura",
                titulo: 'AutoCAD 2D',
                preco: '32.900',
                descricao: 'Descrição do curso...',
                imagem: './assets/img/gallery/AutoCAD-Civil-2D.png'
            }, {
                id: 4,
                categoria: 'Engenharia Civil',
                titulo: 'Ganttproject',
                preco: '33.000',
                descricao: 'Descrição do curso...',
                imagem: './assets/img/gallery/012.jpeg'
            }, {
                id: 5,
                categoria: 'Dimensionamento',
                titulo: 'Dimensionamento de Estruturas metálicas com Softwate',
                preco: '40.000',
                descricao: 'Descrição do curso...',
                imagem: './assets/img/gallery/011.jpeg'
            }, {
                id: 6,
                categoria: "Dimensionamento",
                titulo: 'Topografia',
                preco: '45.000',
                descricao: 'Descrição do curso...',
                imagem: './assets/img/gallery/8.jpeg'
            }, {
                id: 7,
                categoria: "Arquitetura",
                titulo: 'Revit + Lumion',
                preco: '29.000',
                descricao: 'Descrição do curso...',
                imagem: './assets/img/gallery/111.jpeg'
            }, {
                id: 8,
                categoria: "Dimensionamento",
                titulo: 'SIG - Produção de mapas com QGIS',
                preco: '15.000',
                descricao: 'Descrição do curso...',
                imagem: './assets/img/gallery/008.jpeg'
            }, ],

            slides: [{
                image: './assets/img/gallery/001.jpeg',
                title: 'Dê o próximo passo rumo à excelência.',
                description: 'Oferecemos programas de formação personalizados e planos de formação adaptados a diversas necessidades.'
            }, {
                image: './assets/img/gallery/002.jpeg',
                title: 'Garantia de Sucesso',
                description: 'A maioria dos nossos alunos conquista o emprego dos sonhos em pouco tempo.'
            }, {
                image: './assets/img/gallery/012.jpeg',
                title: 'Planejamento',
                description: 'Um percurso estruturado e focado na prática para garantir que você alcance os seus objetivos profissionais.'
            }, {
                image: './assets/img/gallery/43.jpeg',
                title: 'Metodologia Ágil',
                description: 'Aprenda com projetos reais e mentoria focada em alta performance.'
            }]

        };
    },

    computed: {
        trackStyle() {
            // Centralização precisa usando a largura da janela
            const centerOffset = window.innerWidth / 2 - this.cardWidth / 2;
            const x = centerOffset - (this.currentIdx * this.cardWidth);
            return {
                transform: 'translateX(' + x + 'px)',
                transition: this.transitioning ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
            };
        }
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
        },

        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        startAutoPlay() {
            this.timer = setInterval(this.nextSlide, 5000);
        },
        stopAutoPlay() {
            clearInterval(this.timer);
        },

        next() {
            if (!this.transitioning) return;
            this.currentIdx++;
        },
        prev() {
            if (!this.transitioning) return;
            this.currentIdx--;
        },
        handleTransitionEnd() {
            // Teleporte invisível (Loop)
            if (this.currentIdx >= this.displaySlides.length - 3) {
                this.transitioning = false;
                this.currentIdx = 3;
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.transitioning = true;
                    }, 50);
                });
            } else if (this.currentIdx <= 2) {
                this.transitioning = false;
                this.currentIdx = this.displaySlides.length - 6;
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.transitioning = true;
                    }, 50);
                });
            }
        }

    },

    created() {
        // Lógica de Clones para Loop Infinito
        const startClones = this.rawSlides.slice(-3);
        const endClones = this.rawSlides.slice(0, 3);
        this.displaySlides = [...startClones, ...this.rawSlides, ...endClones];
    },
    template: await get_template("./assets/js/view/home/home"),
};