import get_template from "../../components/get_template.js";

export default {
    data: function() {
        return {
            images: [{
                thumb: './assets/img/gallery/003.jpeg',
                full: './assets/img/gallery/003.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/004.jpeg',
                full: './assets/img/gallery/004.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/005.jpeg',
                full: './assets/img/gallery/005.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/006.jpeg',
                full: './assets/img/gallery/006.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/22.jpeg',
                full: './assets/img/gallery/22.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/12.jpeg',
                full: './assets/img/gallery/12.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/13.jpeg',
                full: './assets/img/gallery/13.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/14.jpeg',
                full: './assets/img/gallery/14.jpeg',
                title: '<h4>Imagem 1</h4><p>Descrição da imagem</p>'
            }, {
                thumb: './assets/img/gallery/15.jpeg',
                full: './assets/img/gallery/15.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/16.jpeg',
                full: './assets/img/gallery/16.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/17.jpeg',
                full: './assets/img/gallery/71.jpeg',
                title: '<h4>Imagem 1</h4><p>Descrição da imagem</p>'
            }, {
                thumb: './assets/img/gallery/18.jpeg',
                full: './assets/img/gallery/18.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/19.jpeg',
                full: './assets/img/gallery/19.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/111.jpeg',
                full: './assets/img/gallery/111.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/112.jpeg',
                full: './assets/img/gallery/112.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/113.jpeg',
                full: './assets/img/gallery/113.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/114.jpeg',
                full: './assets/img/gallery/114.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/23.jpeg',
                full: './assets/img/gallery/23.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/24.jpeg',
                full: './assets/img/gallery/24.jpeg',
                title: '<h4>Imagem 4</h4>'
            }]
        };
    },

    methods: {},

    mounted() {
        this.$nextTick(() => {
            // Inicializa o lightGallery
            lightGallery(document.getElementById('lightgallery'), {
                plugins: [lgZoom, lgThumbnail],
                speed: 500,
                // CRUCIAL: Diz ao lightGallery para tratar os links 'a' como itens da galeria
                selector: 'a'
            });
        });
    },

    template: await get_template("./assets/js/view/galeria/home"),
};