function to_wavelet(wavelet){
    var maindiv = document.getElementById("main");
    if (wavelet != "errors"){
        var type_string = wavelet.substring(0,2);
        var wavelet_type = "";
        switch(type_string){
            case "ha":
                wavelet_type = "haar";
                break;
            case "db":
                wavelet_type = "db";
                break;
            case "dm":
                wavelet_type = "dmey";
                break;
            case "bi":
                wavelet_type = "bior";
                break;
            case "co":
                wavelet_type = "coif";
                break;
            case "sy":
                wavelet_type = "sym";
                break;
        }
        create_plot_divs(wavelet_type, wavelet);
    }
    var waveletdiv = document.getElementById(wavelet);
    //waveletdiv.style.display = "unset";
    maindiv.innerHTML = waveletdiv.innerHTML;
}

function collapse(wavelet){
    var text = "nav_" + wavelet;
    var undernav = document.getElementById(text);
    for (var i=0; i < undernav.children.length; i++){
        var child=undernav.children[i];
        if (child.style.display != ""){
            child.style.display = "";
        }
        else {
            child.style.display = "block";
        }
    }
}

function create_plot_divs(wavelet, key){

    const newDiv = document.createElement("div");
    newDiv.className = "wavelet-family";
    newDiv.id = key;
    const colDiv = document.createElement("div");

    for (var i = 1; i < 17; i++){
        var plot_src = "plot_images/" + wavelet + "/Promenade1_" + key + "_" + i + ".png"
        const newImg = document.createElement("img");
        newImg.src = plot_src;
        colDiv.appendChild(newImg);
    }
    newDiv.appendChild(colDiv);

    const errorDiv = document.getElementById("errors");

    document.body.insertBefore(newDiv, errorDiv);
    
}

function create_all_for_key(wavelet){

    if (wavelet == "haar"){
        create_plot_divs('haar', 'haar');
    }

    else if (wavelet == "dmey"){
        create_plot_divs('dmey', 'dmey');
    }


    else if (wavelet == "db"){
        create_plot_divs('db', 'db3');
        create_plot_divs('db', 'db4');
        create_plot_divs('db', 'db5');
        create_plot_divs('db', 'db6');
        create_plot_divs('db', 'db12');
        create_plot_divs('db', 'db16');
        create_plot_divs('db', 'db20');
        create_plot_divs('db', 'db30');
        create_plot_divs('db', 'db38');
    }

    else if (wavelet == "bior"){
        create_plot_divs('bior', 'bior1.1');
        create_plot_divs('bior', 'bior1.5');
        create_plot_divs('bior', 'bior2.2');
        create_plot_divs('bior', 'bior2.8');
        create_plot_divs('bior', 'bior3.1');
        create_plot_divs('bior', 'bior3.9');
        create_plot_divs('bior', 'bior4.4');
        create_plot_divs('bior', 'bior6.8');
    }

    else if (wavelet == "coif"){
        create_plot_divs('coif', 'coif1');
        create_plot_divs('coif', 'coif2');
        create_plot_divs('coif', 'coif10');
        create_plot_divs('coif', 'coif16');
    }

    else if (wavelet == "sym"){
        create_plot_divs('sym', 'sym2');
        create_plot_divs('sym', 'sym3');
        create_plot_divs('sym', 'sym4');
        create_plot_divs('sym', 'sym5');
        create_plot_divs('sym', 'sym6');
        create_plot_divs('sym', 'sym12');
        create_plot_divs('sym', 'sym16');
        create_plot_divs('sym', 'sym20');
    }
}