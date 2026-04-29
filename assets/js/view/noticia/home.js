import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {
            searchQuery: '',
            posts: [{
                title: "A NASA responde às suas perguntas mais urgentes sobre a Artemis II",
                tag: "Tecnologia",
                readTime: "4 min",
                author: "Eugênio Nelson",
                date: "04 abr, 2026",
                authorImg: "https://ui-avatars.com/api/?name=EN&background=0d6efd&color=fff",
                excerpt: "Nota do editor: Esta matéria foi atualizada às 12h40 EDT (horário de Luanda) do domingo...",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400"
            }, {
                title: "O que é um agente de IA?",
                tag: "Tecnologia",
                readTime: "5 min",
                author: "Eugênio Nelson",
                date: "03 abr, 2026",
                authorImg: "https://ui-avatars.com/api/?name=EN&background=0d6efd&color=fff",
                excerpt: "O guia sobre agentes de IA: Uma breve explicação dos agentes de IA e como eles funcionam...",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
            }, {
                title: "Crie a sua Primeira IA com TensorFlow e Keras (Aula 1)",
                tag: "Tecnologia",
                readTime: "8 min",
                author: "Eugênio Nelson",
                date: "28 mar, 2026",
                authorImg: "https://ui-avatars.com/api/?name=EN&background=0d6efd&color=fff",
                excerpt: "Introdução ao mundo incrível da Inteligência Artificial, construindo seu primeiro modelo...",
                image: "https://images.unsplash.com/photo-1509228463551-3146b28031a4?auto=format&fit=crop&q=80&w=400"
            }, {
                title: "A Arquitetura do Caos: Da Queda da Cloudflare à Fragilidade",
                tag: "Tecnologia",
                readTime: "6 min",
                author: "Eugênio Nelson",
                date: "28 mar, 2026",
                authorImg: "https://ui-avatars.com/api/?name=EN&background=0d6efd&color=fff",
                excerpt: "Uma análise profunda sobre como sistemas globais podem falhar e o que aprendemos com isso...",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400"
            }, {
                title: "Alerta Android 15: O Fim do setStatusBarColor",
                tag: "Tecnologia",
                readTime: "4 min",
                author: "Eugênio Nelson",
                date: "27 mar, 2026",
                authorImg: "https://ui-avatars.com/api/?name=EN&background=0d6efd&color=fff",
                excerpt: "Android 15 muda a forma como as barras de sistema funcionam. Saiba como se preparar...",
                image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=400"
            }, {
                title: "O que é um build?",
                tag: "Tecnologia",
                readTime: "3 min",
                author: "Eugênio Nelson",
                date: "26 mar, 2026",
                authorImg: "https://ui-avatars.com/api/?name=EN&background=0d6efd&color=fff",
                excerpt: "Os aplicativos que você usa passam por um processo de construção chamado build. Entenda o que é...",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400"
            }]

        }
    },
    computed: {
        filteredPosts() {
            return this.posts.filter(post =>
                post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            )
        }
    },
    async mounted() {


        AOS.init({
            duration: 1000,
        });
    },

    template: await get_template('./assets/js/view/noticia/home')
}