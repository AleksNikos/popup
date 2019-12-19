window.onload = function(e) {
    // POPUP 
    function Popup(obj){
        this.modal = document.querySelector(obj.modal);
        this.overlay = document.querySelector(obj.overlay);
        this.content = obj.content;
        this.element = document.querySelector(obj.element);

        var popup = this;

        this.open = function(obj){
            popup.modal.innerHTML = popup.content;
            popup.modal.classList.add('active');
            popup.overlay.classList.add('active');
        }
        this.close = function(){
            popup.modal.classList.remove('active');
            popup.overlay.classList.remove('active');
        }
        
        popup.element.onclick = function(){
            popup.open();
        }

        popup.overlay.onclick = function(){
            popup.close();
        }
        
    }
    
    // Parameters
    
    var p = new Popup({
        modal: '.popup',
        overlay: '.overlay',
        content: '<h1>First</h1> <h3>Subtitle</h3>',
        element: '.first'
    });

    var z = new Popup({
        modal: '.popup',
        overlay: '.overlay',
        content: '<h1>Second</h1> <h3>Subtitle</h3>',
        element: '.second'
    })

}
