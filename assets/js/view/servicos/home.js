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
                titulo: 'Arquitetura Web 10X',
                preco: '49.900',
                descricao: 'Descrição do curso...',
                imagem: 'https://picsum.photos/400/200?random=1'
            }, {
                id: 2,
                categoria: 'Engenharia Civil',
                titulo: 'Excel Avançado',
                preco: '32.900',
                descricao: 'Descrição do curso...',
                imagem: 'https://picsum.photos/400/200?random=2'
            }, {
                id: 3,
                categoria: "Arquitetura",
                titulo: 'Python Completo',
                preco: '32.900',
                descricao: 'Descrição do curso...',
                imagem: 'https://picsum.photos/400/200?random=3'
            }, {
                id: 4,
                categoria: 'Engenharia Civil',
                titulo: 'Cybersegurança',
                preco: '33.000',
                descricao: 'Descrição do curso...',
                imagem: 'https://picsum.photos/400/200?random=4'
            }, {
                id: 5,
                categoria: 'Dimensionamento',
                titulo: 'Node.js Backend',
                preco: '40.000',
                descricao: 'Descrição do curso...',
                imagem: 'https://picsum.photos/400/200?random=5'
            }, {
                id: 6,
                categoria: "Dimensionamento",
                titulo: 'React & Vue',
                preco: '45.000',
                descricao: 'Descrição do curso...',
                imagem: 'https://picsum.photos/400/200?random=6'
            }, {
                id: 7,
                categoria: "Arquitetura",
                titulo: 'UI/UX Design',
                preco: '29.000',
                descricao: 'Descrição do curso...',
                imagem: 'https://picsum.photos/400/200?random=7'
            }, {
                id: 8,
                categoria: "Dimensionamento",
                titulo: 'Marketing Digital',
                preco: '15.000',
                descricao: 'Descrição do curso...',
                imagem: 'https://picsum.photos/400/200?random=8'
            }, {
                id: 9,
                categoria: 'Engenharia Civil',
                titulo: 'Inglês Tech',
                preco: '12.000',
                descricao: 'Descrição do curso...',
                imagem: 'https://picsum.photos/400/200?random=9'
            }, ]
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