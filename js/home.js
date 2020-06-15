let cHome = {
    name:"home",
    cmp:"cmp-home"
}

let data = { 
    title:">=[ -.-]",
    navigationContent:[
        {
            name:"abt.",
            cmp:"cmp-home"
        },
        {
            name:"gam.",
            cmp:"cmp-home"
        },
        {
            name:"mus.",
            cmp:"cmp-home"
        },
        {
            name:"pxl.",
            cmp:"cmp-home"
        },
        {
            name:"blg.",
            cmp:"cmp-home"
        }
    ],
    currentContent:cHome
}

Vue.component("cmp-home", {
    template: `<div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut. Egestas purus viverra accumsan in. Auctor elit sed vulputate mi sit amet. Pellentesque adipiscing commodo elit at. Eu consequat ac felis donec. Nisl pretium fusce id velit. Massa enim nec dui nunc. Vulputate dignissim suspendisse in est ante. Quis risus sed vulputate odio ut enim blandit.</div>
        <div>Donec massa sapien faucibus et molestie ac feugiat sed. Volutpat diam ut venenatis tellus in. Mauris vitae ultricies leo integer malesuada nunc. Arcu bibendum at varius vel pharetra vel turpis nunc. Nunc faucibus a pellentesque sit. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Sit amet mauris commodo quis imperdiet massa. Augue ut lectus arcu bibendum. Justo laoreet sit amet cursus sit amet. In nibh mauris cursus mattis molestie. Donec et odio pellentesque diam volutpat commodo. Sapien et ligula ullamcorper malesuada proin. Dictumst vestibulum rhoncus est pellentesque.</div>
        <div>Accumsan tortor posuere ac ut consequat semper viverra nam libero. Lectus quam id leo in vitae turpis massa sed elementum. Proin fermentum leo vel orci porta non. Platea dictumst quisque sagittis purus sit amet. Aliquam nulla facilisi cras fermentum odio. Ultrices dui sapien eget mi. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Urna et pharetra pharetra massa massa ultricies mi quis. Quam vulputate dignissim suspendisse in est ante. Elit sed vulputate mi sit amet. Iaculis nunc sed augue lacus viverra. Ac orci phasellus egestas tellus. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Pretium fusce id velit ut tortor pretium viverra. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Cursus sit amet dictum sit.</div>
        </div>`
});

let vm = new Vue({
    el:'#app',
    data: data,
    created: onCreated,
    methods:{
        toggleDark,
        onTitleClicked
    },
    computed:{
        getContentComponent:function(){
            return this.currentContent.cmp;
        }
    }
});

function onCreated(){
    console.log("ei");
}

function toggleDark(){
    document.body.classList.toggle("dark");
}

function onTitleClicked(){
    vm.currentContent = cHome;
}