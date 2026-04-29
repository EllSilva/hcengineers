import get_template from "../../components/get_template.js";

export default {
    data: function() {
        return {
            searchQuery: '',
            selectedArea: '',
            selectedLevel: '',
            paginaAtual: 1,
            itensPorPagina: 4,
            filtroNome: '',
            filtroCategoria: '',
            categorias: ['Engenharia Civil', 'Arquitetura', 'Dimensionamento'],
            // Dados que preenchem os selects
            areas: [
                'Desenvolvimento Web',
                'Data Science',
                'Design UI/UX',
                'Marketing Digital',
                'Cibersegurança',
                'Inteligência Artificial'
            ],
            niveis: [
                'Iniciante',
                'Intermediário',
                'Avançado',
                'Especialista'
            ],


            paginaAtual: 1,
            itensPorPagina: 8,
            // Simulando 10 cursos para testar a paginação
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
        }

    },
    computed: {

        // 1. PRIMEIRO: Filtra a lista completa
        cursosFiltrados() {
            return this.cursos.filter(curso => {
                const matchNome = curso.titulo.toLowerCase().includes(this.filtroNome.toLowerCase());
                const matchCategoria = this.filtroCategoria === '' || curso.categoria === this.filtroCategoria;
                return matchNome && matchCategoria;
            });
        },
        // 2. SEGUNDO: Calcula as páginas com base no resultado filtrado
        totalPaginas() {
            return Math.ceil(this.cursosFiltrados.length / this.itensPorPagina);
        },
        // 3. TERCEIRO: Pega a fatia para exibição
        cursosPaginados() {
            const start = (this.paginaAtual - 1) * this.itensPorPagina;
            return this.cursosFiltrados.slice(start, start + this.itensPorPagina);
        }
    },
    methods: {
        limparFiltros() {
            this.filtroNome = '';
            this.filtroCategoria = '';
            this.paginaAtual = 1;
        }
    },

    async mounted() {


    },
    template: await get_template("./assets/js/view/servicos/home"),
};