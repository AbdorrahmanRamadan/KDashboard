window.onload=function () {
    //gradient progress bar
    const gradient_primary = document.getElementsByClassName("koala-progress-bar-gradient");
    console.log(gradient_primary.length);
    if (gradient_primary !== null) {
        for (let i = 0; i < gradient_primary.length; i++) {
            const gradient_progress = gradient_primary[i];
            const v = parseFloat(gradient_progress.getAttribute("data-done"));
            const color = gradient_progress.getAttribute("progress-color");
            const location = gradient_progress.getAttribute("data-location");
            const min = parseFloat(gradient_progress.getAttribute("data-min"));
            const max = parseFloat(gradient_progress.getAttribute("data-max"));
            if (v < min) {
                alert(" data-done  <  data-min ");
            }
            if (v > max) {
                alert(" data-done  >  data-max ");
            }
            if (color === "primary-info") {
                const primary_info = document.createElement("span");
                primary_info.setAttribute("class", "koala-primary-info");
                primary_info.style.width = (v / max) * 100 + '%';
                primary_info.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside");
                    primary_info.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside");
                    gradient_progress.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                gradient_progress.appendChild(primary_info);
                
            }
            if (color === "primary-danger") {
                const primary_danger = document.createElement("span");
                primary_danger.setAttribute("class", "koala-primary-danger");
                primary_danger.style.width = (v / max) * 100 + '%';
                primary_danger.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside");
                    primary_danger.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside");
                    gradient_progress.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                gradient_progress.appendChild(primary_danger);
            }
        }
    }

    //normal progress bar with border radius
    const progress_bar = document.getElementsByClassName("koala-progress-bar");
    console.log(gradient_primary.length);
    if (progress_bar !== null) {
        for (let i = 0; i < progress_bar.length; i++) {
            const progress = progress_bar[i];
            const v = parseFloat(progress.getAttribute("data-done"));
            const color = progress.getAttribute("progress-color");
            const background = progress.getAttribute("background-color");
            const location = progress.getAttribute("data-location");
            const size = progress.getAttribute("progress-size");
            const radius = progress.getAttribute("border-radius");
            const min = parseFloat(progress.getAttribute("data-min"));
            const max = parseFloat(progress.getAttribute("data-max"));
            if (v < min) {
                alert(" data-done  <  data-min ");
            }
            if (v > max) {
                alert(" data-done  >  data-max ");
            }
            if (color === "primary") {
                const primary = document.createElement("span");
                if (radius === "true") {
                    if (size === "sm") {
                        progress.classList.add("progress-bar-border-radius-sm");
                        primary.setAttribute("class", "koala-primary-sm");
                        console.log(size);
                    }
                    if (size === "md") {
                        progress.classList.add("progress-bar-border-radius-md");
                        primary.setAttribute("class", "koala-primary-md");
                        console.log(size);
                    }
                    if (size === "lg") {
                        progress.classList.add("progress-bar-border-radius-lg");
                        primary.setAttribute("class", "koala-primary-lg");
                        console.log(size);
                    }
                }
                if (radius === "false") {
                    if (size === "sm") {
                        progress.classList.add("progress-bar-sm");
                        primary.setAttribute("class", "koala-primary-sm");
                        console.log(size);
                    }
                    if (size === "md") {
                        progress.classList.add("progress-bar-md");
                        primary.setAttribute("class", "koala-primary-md");
                        console.log(size);
                    }
                    if (size === "lg") {
                        progress.classList.add("progress-bar-lg");
                        primary.setAttribute("class", "koala-primary-lg");
                        console.log(size);
                    }
                }
                if (background === "true") {
                    progress.classList.add("background-primary");
                }
                primary.style.width = (v / max) * 100 + '%';
                primary.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-primary");
                    primary.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-primary");
                    progress.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(primary);
            }

            if (color === "danger") {
                const danger = document.createElement("span");
                if (radius === "true") {
                    if (size === "sm") {
                        progress.classList.add("progress-bar-border-radius-sm");
                        danger.setAttribute("class", "koala-danger-sm");
                    }
                    if (size === "md") {
                        progress.classList.add("progress-bar-border-radius-md");
                        danger.setAttribute("class", "koala-danger-md");
                    }
                    if (size === "lg") {
                        progress.classList.add("progress-bar-border-radius-lg");
                        danger.setAttribute("class", "koala-danger-lg");
                    }
                }
                if (radius === "false") {
                    if (size === "sm") {
                        progress.classList.add("progress-bar-sm");
                        danger.setAttribute("class", "koala-danger-sm");
                    }
                    if (size === "md") {
                        progress.classList.add("progress-bar-md");
                        danger.setAttribute("class", "koala-danger-md");
                    }
                    if (size === "lg") {
                        progress.classList.add("progress-bar-lg");
                        danger.setAttribute("class", "koala-danger-lg");
                    }
                }
                if (background === "true") {
                    progress.classList.add("background-danger");
                }
                danger.style.width = (v / max) * 100 + '%';
                danger.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-danger");
                    danger.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-danger");
                    progress.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(danger);
                
            }

            if (color === "success") {
                const success = document.createElement("span");
                if (radius === "true") {
                    if (size === "sm") {
                        progress.classList.add("progress-bar-border-radius-sm");
                        success.setAttribute("class", "koala-success-sm");
                    }
                    if (size === "md") {
                        progress.classList.add("progress-bar-border-radius-md");
                        success.setAttribute("class", "koala-success-md");
                    }
                    if (size === "lg") {
                        progress.classList.add("progress-bar-border-radius-lg");
                        success.setAttribute("class", "koala-success-lg");
                    }
                }
                if (radius === "false") {
                    if (size === "sm") {
                        progress.classList.add("progress-bar-sm");
                        success.setAttribute("class", "koala-success-sm");
                    }
                    if (size === "md") {
                        progress.classList.add("progress-bar-md");
                        success.setAttribute("class", "koala-success-md");
                    }
                    if (size === "lg") {
                        progress.classList.add("progress-bar-lg");
                        success.setAttribute("class", "koala-success-lg");
                    }
                }
                if (background === "true") {
                    progress.classList.add("background-success");
                }
                success.style.width = (v / max) * 100 + '%';
                success.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-success");
                    success.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-success");
                    progress.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(success);
                
            }

            if (color === "info") {
                const info = document.createElement("span");
                if (radius === "true") {
                    if (size === "sm") {
                        progress.classList.add("progress-bar-border-radius-sm");
                        info.setAttribute("class", "koala-info-sm");
                    }
                    if (size === "md") {
                        progress.classList.add("progress-bar-border-radius-md");
                        info.setAttribute("class", "koala-info-md");
                    }
                    if (size === "lg") {
                        progress.classList.add("progress-bar-border-radius-lg");
                        info.setAttribute("class", "koala-info-lg");
                    }
                }
                if (radius === "false") {
                    if (size === "sm") {
                        progress.classList.add("progress-bar-sm");
                        info.setAttribute("class", "koala-info-sm");
                    }
                    if (size === "md") {
                        progress.classList.add("progress-bar-md");
                        info.setAttribute("class", "koala-info-md");
                    }
                    if (size === "lg") {
                        progress.classList.add("progress-bar-lg");
                        info.setAttribute("class", "koala-info-lg");
                    }
                }
                if (background === "true") {
                    progress.classList.add("background-info");
                }
                info.style.width = (v / max) * 100 + '%';
                info.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-info");
                    info.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-info");
                    progress.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(info);
                
            }

            if (color === "golden") {
                const golden = document.createElement("span");
                if (radius === "true") {
                    if (size === "sm") {
                        progress.classList.add("progress-bar-border-radius-sm");
                        golden.setAttribute("class", "koala-golden-sm");
                    }
                    if (size === "md") {
                        progress.classList.add("progress-bar-border-radius-md");
                        golden.setAttribute("class", "koala-golden-md");
                    }
                    if (size === "lg") {
                        progress.classList.add("progress-bar-border-radius-lg");
                        golden.setAttribute("class", "koala-golden-lg");
                    }
                }
                if (radius === "false") {
                    if (size === "sm") {
                        progress.classList.add("progress-bar-sm");
                        golden.setAttribute("class", "koala-golden-sm");
                    }
                    if (size === "md") {
                        progress.classList.add("progress-bar-md");
                        golden.setAttribute("class", "koala-golden-md");
                    }
                    if (size === "lg") {
                        progress.classList.add("progress-bar-lg");
                        golden.setAttribute("class", "koala-golden-lg");
                    }
                }
                if (background === "true") {
                    progress.classList.add("background-golden");
                }
                golden.style.width = (v / max) * 100 + '%';
                golden.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-golden");
                    golden.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-golden");
                    progress.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(golden);
                
            }
        }
    }

    //border progress bar
    const progress_bar_border = document.getElementsByClassName("koala-progress-bar-border");
    if (progress_bar_border !== null) {
        for (let i = 0; i < progress_bar_border.length; i++) {
            const progress_border = progress_bar_border[i];
            const v = parseFloat(progress_border.getAttribute("data-done"));
            const color = progress_border.getAttribute("progress-color");
            const border = progress_border.getAttribute("border-color");
            const location = progress_border.getAttribute("data-location");
            const min = parseFloat(progress_border.getAttribute("data-min"));
            const max = parseFloat(progress_border.getAttribute("data-max"));
            if (v < min) {
                alert(" data-done  <  data-min ");
            }
            if (v > max) {
                alert(" data-done  >  data-max ");
            }
            if (color === "primary") {
                const primary = document.createElement("span");
                if (border === "true") {
                    progress_border.classList.add("border-primary");
                    primary.setAttribute("class", "koala-border-primary");
                }
                if (border === "false") {
                    progress_border.classList.add("border-color-none");
                    primary.setAttribute("class", "koala-primary");
                }
                primary.style.width = (v / max) * 100 + '%';
                primary.style.opacity = 1;
                const value = document.createElement("span");

                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-primary");
                    primary.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-primary");
                    progress_border.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress_border.appendChild(primary);
                
            }

            if (color === "danger") {
                const danger = document.createElement("span");
                if (border === "true") {
                    progress_border.classList.add("border-danger");
                    danger.setAttribute("class", "koala-border-danger");
                }
                if (border === "false") {
                    progress_border.classList.add("border-color-none");
                    danger.setAttribute("class", "koala-danger");
                }
                danger.style.width = (v / max) * 100 + '%';
                danger.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-danger");
                    danger.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-danger");
                    progress_border.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress_border.appendChild(danger);
                
            }

            if (color === "success") {
                const success = document.createElement("span");
                if (border === "true") {
                    progress_border.classList.add("border-success");
                    success.setAttribute("class", "koala-border-success");
                }
                if (border === "false") {
                    progress_border.classList.add("border-color-none");
                    success.setAttribute("class", "koala-success");
                }
                success.style.width = (v / max) * 100 + '%';
                success.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-success");
                    success.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-success");
                    progress_border.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress_border.appendChild(success);
                
            }

            if (color === "info") {
                const info = document.createElement("span");
                if (border === "true") {
                    progress_border.classList.add("border-info");
                    info.setAttribute("class", "koala-border-info");
                }
                if (border === "false") {
                    progress_border.classList.add("border-color-none");
                    info.setAttribute("class", "koala-info");
                }
                info.style.width = (v / max) * 100 + '%';
                info.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-info");
                    info.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-info");
                    progress_border.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress_border.appendChild(info);
                
            }

            if (color === "golden") {
                const golden = document.createElement("span");
                if (border === "true") {
                    progress_border.classList.add("border-golden");
                    golden.setAttribute("class", "koala-border-golden");
                }
                if (border === "false") {
                    progress_border.classList.add("border-color-none");
                    golden.setAttribute("class", "koala-golden");
                }
                golden.style.width = (v / max) * 100 + '%';
                golden.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-golden");
                    golden.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-golden");
                    progress_border.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress_border.appendChild(golden);
                
            }
        }
    }

    // progress bar light
    const progress_bar_light = document.getElementsByClassName("koala-progress-bar-light");
    console.log(progress_bar_light.length);
    if (progress_bar_light !== null) {
        for (let i = 0; i < progress_bar_light.length; i++) {
            const progress = progress_bar_light[i];
            const v = parseFloat(progress.getAttribute("data-done"));
            const color = progress.getAttribute("progress-color");
            const location = progress.getAttribute("data-location");
            const size = progress.getAttribute("progress-size");
            const min = parseFloat(progress.getAttribute("data-min"));
            const max = parseFloat(progress.getAttribute("data-max"));
            if (v < min) {
                alert(" data-done  <  data-min ");
            }
            if (v > max) {
                alert(" data-done  >  data-max ");
            }
            if (color === "primary") {
                const primary = document.createElement("span");
                if (size === "sm") {
                    progress.classList.add("progress-bar-light-radius-sm");
                    primary.setAttribute("class", "koala-primary-sm");
                }
                if (size === "md") {
                    progress.classList.add("progress-bar-light-radius-md");
                    primary.setAttribute("class", "koala-primary-md");
                }
                if (size === "lg") {
                    progress.classList.add("progress-bar-light-radius-lg");
                    primary.setAttribute("class", "koala-primary-lg");
                }
                primary.style.width = (v / max) * 100 + '%';
                primary.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-primary");
                    primary.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-primary");
                    progress.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(primary);
                
            }
            if (color === "danger") {
                const danger = document.createElement("span");
                if (size === "sm") {
                    progress.classList.add("progress-bar-light-radius-sm");
                    danger.setAttribute("class", "koala-danger-sm");
                }
                if (size === "md") {
                    progress.classList.add("progress-bar-light-radius-md");
                    danger.setAttribute("class", "koala-danger-md");
                }
                if (size === "lg") {
                    progress.classList.add("progress-bar-light-radius-lg");
                    danger.setAttribute("class", "koala-danger-lg");
                }
                danger.style.width = (v / max) * 100 + '%';
                danger.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-danger");
                    danger.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-danger");
                    progress.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(danger);
                
            }
            if (color === "success") {
                const success = document.createElement("span");
                if (size === "sm") {
                    progress.classList.add("progress-bar-light-radius-sm");
                    success.setAttribute("class", "koala-success-sm");
                }
                if (size === "md") {
                    progress.classList.add("progress-bar-light-radius-md");
                    success.setAttribute("class", "koala-success-md");
                }
                if (size === "lg") {
                    progress.classList.add("progress-bar-light-radius-lg");
                    success.setAttribute("class", "koala-success-lg");
                }
                success.style.width = (v / max) * 100 + '%';
                success.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-success");
                    success.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-success");
                    progress.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(success);
                
            }
            if (color === "info") {
                const info = document.createElement("span");
                if (size === "sm") {
                    progress.classList.add("progress-bar-light-radius-sm");
                    info.setAttribute("class", "koala-info-sm");
                }
                if (size === "md") {
                    progress.classList.add("progress-bar-light-radius-md");
                    info.setAttribute("class", "koala-info-md");
                }
                if (size === "lg") {
                    progress.classList.add("progress-bar-light-radius-lg");
                    info.setAttribute("class", "koala-info-lg");
                }
                info.style.width = (v / max) * 100 + '%';
                info.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-info");
                    info.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-info");
                    progress.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(info);
            }
            if (color === "golden") {
                const golden = document.createElement("span");
                if (size === "sm") {
                    progress.classList.add("progress-bar-light-radius-sm");
                    golden.setAttribute("class", "koala-golden-sm");
                }
                if (size === "md") {
                    progress.classList.add("progress-bar-light-radius-md");
                    golden.setAttribute("class", "koala-golden-md");
                }
                if (size === "lg") {
                    progress.classList.add("progress-bar-light-radius-lg");
                    golden.setAttribute("class", "koala-golden-lg");
                }
                golden.style.width = (v / max) * 100 + '%';
                golden.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-golden");
                    golden.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-golden");
                    progress.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(golden);
                
            }
        }
    }
    const progress_bar_data = document.getElementsByClassName("koala-progress-bar-data");
    console.log(progress_bar_data.length);
    if (progress_bar_data !== null) {
        for (let i = 0; i < progress_bar_data.length; i++) {
            const progress = progress_bar_data[i];
            const v = parseFloat(progress.getAttribute("data-done"));
            const color = progress.getAttribute("progress-color");
            const data = progress.getAttribute("data-name");
            const border = progress.getAttribute("border-radius");
            const min = parseFloat(progress.getAttribute("data-min"));
            const max = parseFloat(progress.getAttribute("data-max"));
            if (v < min) {
                alert(" data-done  <  data-min ");
            }
            if (v > max) {
                alert(" data-done  >  data-max ");
            }
            if (color === "primary") {
                const data_name = document.createElement("span");
                data_name.setAttribute("class", "data-name");
                const primary = document.createElement("span");
                const value = document.createElement("span");
                if (border === "true") {
                    primary.setAttribute("class", "koala-radius-primary");
                    if ((v / max) * 100 <= 87) {
                        value.setAttribute("class", "data-done-primary");
                    }
                    if ((v / max) * 100 > 87) {
                        value.setAttribute("class", "data-done");
                    }
                    if ((v / max) * 100 < 3) {
                        data_name.setAttribute("class", "data-name-primary");
                    }
                }

                if (border === "false") {
                    progress.classList.add("border-radius");
                    primary.setAttribute("class", "koala-primary");
                    if ((v / max) * 100 <= 87) {
                        value.setAttribute("class", "data-done-primary");
                    }
                    if ((v / max) * 100 > 87) {
                        value.setAttribute("class", "data-done");
                    }
                    if ((v / max) * 100 < 3) {
                        data_name.setAttribute("class", "data-name-primary");
                    }
                }
                primary.style.width = (v / max) * 100 + '%';
                primary.style.opacity = 1;
                const datatext = document.createTextNode((v / max) * 100 + " %");
                const dataname = document.createTextNode(data);
                data_name.appendChild(dataname);
                progress.appendChild(data_name);
                value.appendChild(datatext);
                progress.appendChild(value);
                progress.appendChild(primary);
                
            }
            if (color === "danger") {
                const data_name = document.createElement("span");
                data_name.setAttribute("class", "data-name");
                const danger = document.createElement("span");
                const value = document.createElement("span");
                if (border === "true") {
                    danger.setAttribute("class", "koala-radius-danger");
                    if ((v / max) * 100 <= 87) {
                        value.setAttribute("class", "data-done-danger");
                    }
                    if ((v / max) * 100 > 87) {
                        value.setAttribute("class", "data-done");
                    }
                    if ((v / max) * 100 < 3) {
                        data_name.setAttribute("class", "data-name-danger");
                    }
                }

                if (border === "false") {
                    progress.classList.add("border-radius");
                    danger.setAttribute("class", "koala-danger");
                    if ((v / max) * 100 <= 87) {
                        value.setAttribute("class", "data-done-danger");
                    }
                    if ((v / max) * 100 > 87) {
                        value.setAttribute("class", "data-done");
                    }
                    if ((v / max) * 100 < 3) {
                        data_name.setAttribute("class", "data-name-danger");
                    }
                }
                danger.style.width = (v / max) * 100 + '%';
                danger.style.opacity = 1;
                const datatext = document.createTextNode((v / max) * 100 + " %");
                const dataname = document.createTextNode(data);
                data_name.appendChild(dataname);
                progress.appendChild(data_name);
                value.appendChild(datatext);
                progress.appendChild(value);
                progress.appendChild(danger);
                
            }
            if (color === "success") {
                const data_name = document.createElement("span");
                data_name.setAttribute("class", "data-name");
                const success = document.createElement("span");
                const value = document.createElement("span");
                if (border === "true") {
                    success.setAttribute("class", "koala-radius-success");
                    if ((v / max) * 100 <= 87) {
                        value.setAttribute("class", "data-done-success");
                    }
                    if ((v / max) * 100 > 87) {
                        value.setAttribute("class", "data-done");
                    }
                    if ((v / max) * 100 < 3) {
                        data_name.setAttribute("class", "data-name-success");
                    }
                }

                if (border === "false") {
                    progress.classList.add("border-radius");
                    success.setAttribute("class", "koala-success");
                    if ((v / max) * 100 <= 87) {
                        value.setAttribute("class", "data-done-success");
                    }
                    if ((v / max) * 100 > 87) {
                        value.setAttribute("class", "data-done");
                    }
                    if ((v / max) * 100 < 3) {
                        data_name.setAttribute("class", "data-name-success");
                    }
                }
                success.style.width = (v / max) * 100 + '%';
                success.style.opacity = 1;
                const datatext = document.createTextNode((v / max) * 100 + " %");
                const dataname = document.createTextNode(data);
                data_name.appendChild(dataname);
                progress.appendChild(data_name);
                value.appendChild(datatext);
                progress.appendChild(value);
                progress.appendChild(success);
                
            }
            if (color === "info") {
                const data_name = document.createElement("span");
                data_name.setAttribute("class", "data-name");
                const info = document.createElement("span");
                const value = document.createElement("span");
                if (border === "true") {
                    info.setAttribute("class", "koala-radius-info");
                    if ((v / max) * 100 <= 87) {
                        value.setAttribute("class", "data-done-info");
                    }
                    if ((v / max) * 100 > 87) {
                        value.setAttribute("class", "data-done");
                    }
                    if ((v / max) * 100 < 3) {
                        data_name.setAttribute("class", "data-name-info");
                    }
                }

                if (border === "false") {
                    progress.classList.add("border-radius");
                    info.setAttribute("class", "koala-info");
                    if ((v / max) * 100 <= 87) {
                        value.setAttribute("class", "data-done-info");
                    }
                    if ((v / max) * 100 > 87) {
                        value.setAttribute("class", "data-done");
                    }
                    if ((v / max) * 100 < 3) {
                        data_name.setAttribute("class", "data-name-info");
                    }
                }
                info.style.width = (v / max) * 100 + '%';
                info.style.opacity = 1;
                const datatext = document.createTextNode((v / max) * 100 + " %");
                const dataname = document.createTextNode(data);
                data_name.appendChild(dataname);
                progress.appendChild(data_name);
                value.appendChild(datatext);
                progress.appendChild(value);
                progress.appendChild(info);
                
            }
            if (color === "golden") {
                const data_name = document.createElement("span");
                data_name.setAttribute("class", "data-name");
                const golden = document.createElement("span");
                const value = document.createElement("span");
                if (border === "true") {
                    golden.setAttribute("class", "koala-radius-golden");
                    if ((v / max) * 100 <= 87) {
                        value.setAttribute("class", "data-done-golden");
                    }
                    if ((v / max) * 100 > 87) {
                        value.setAttribute("class", "data-done");
                    }
                    if ((v / max) * 100 < 3) {
                        data_name.setAttribute("class", "data-name-golden");
                    }
                }

                if (border === "false") {
                    progress.classList.add("border-radius");
                    golden.setAttribute("class", "koala-golden");
                    if ((v / max) * 100 <= 87) {
                        value.setAttribute("class", "data-done-golden");
                    }
                    if ((v / max) * 100 > 87) {
                        value.setAttribute("class", "data-done");
                    }
                    if ((v / max) * 100 < 3) {
                        data_name.setAttribute("class", "data-name-golden");
                    }
                }
                golden.style.width = (v / max) * 100 + '%';
                golden.style.opacity = 1;
                const datatext = document.createTextNode((v / max) * 100 + " %");
                const dataname = document.createTextNode(data);
                data_name.appendChild(dataname);
                progress.appendChild(data_name);
                value.appendChild(datatext);
                progress.appendChild(value);
                progress.appendChild(golden);
                
            }
        }
    }

// progress bar with gradient one color
    const progress_bar_gradient_one = document.getElementsByClassName("koala-progress-bar-gradient-one");
    console.log(progress_bar_gradient_one.length);
    if (progress_bar_gradient_one !== null) {
        for (let i = 0; i < progress_bar_gradient_one.length; i++) {
            const progress = progress_bar_gradient_one[i];
            const v = parseFloat(progress.getAttribute("data-done"));
            const color = progress.getAttribute("progress-color");
            const background = progress.getAttribute("background-color");
            const location = progress.getAttribute("data-location");
            const radius = progress.getAttribute("border-radius");
            const min = parseFloat(progress.getAttribute("data-min"));
            const max = parseFloat(progress.getAttribute("data-max"));
            if (v < min) {
                alert(" data-done  <  data-min ");
            }
            if (v > max) {
                alert(" data-done  >  data-max ");
            }
            if (color === "primary") {
                const primary = document.createElement("span");
                if (radius === "true") {
                    primary.setAttribute("class", "koala-radius-primary");
                }
                if (radius === "false") {
                    progress.classList.add("border-radius");
                    primary.setAttribute("class", "koala-primary");
                }
                if (background === "true") {
                    progress.classList.add("background-primary");
                }
                primary.style.width = (v / max) * 100 + '%';
                primary.style.opacity = 1;
                const value = document.createElement("span");
                if((v / max) * 100 <= 87){
                    value.setAttribute("class", "data-done");
                }
                if((v / max) * 100 > 87){
                    value.setAttribute("class", "data-done-outside-primary");
                }
                progress.appendChild(value);
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(primary);
                
            }

            if (color === "danger") {
                const danger = document.createElement("span");
                if (radius === "true") {
                    danger.setAttribute("class", "koala-radius-danger");
                }
                if (radius === "false") {
                    progress.classList.add("border-radius");
                    danger.setAttribute("class", "koala-danger");
                }
                if (background === "true") {
                    progress.classList.add("background-danger");
                }
                danger.style.width = (v / max) * 100 + '%';
                danger.style.opacity = 1;
                const value = document.createElement("span");
                if((v / max) * 100 <= 87){
                    value.setAttribute("class", "data-done");
                }
                if((v / max) * 100 > 87){
                    value.setAttribute("class", "data-done-outside-danger");
                }
                progress.appendChild(value);
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(danger);
                
            }

            if (color === "success") {
                const success = document.createElement("span");
                if (radius === "true") {
                    success.setAttribute("class", "koala-radius-success");
                }
                if (radius === "false") {
                    progress.classList.add("border-radius");
                    success.setAttribute("class", "koala-success");
                }
                if (background === "true") {
                    progress.classList.add("background-success");
                }
                success.style.width = (v / max) * 100 + '%';
                success.style.opacity = 1;
                const value = document.createElement("span");
                if((v / max) * 100 <= 87){
                    value.setAttribute("class", "data-done");
                }
                if((v / max) * 100 > 87){
                    value.setAttribute("class", "data-done-outside-success");
                }
                progress.appendChild(value);
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(success);
                
            }

            if (color === "info") {
                const info = document.createElement("span");
                if (radius === "true") {
                    info.setAttribute("class", "koala-radius-info");
                }
                if (radius === "false") {
                    progress.classList.add("border-radius");
                    info.setAttribute("class", "koala-info");
                }
                if (background === "true") {
                    progress.classList.add("background-info");
                }
                info.style.width = (v / max) * 100 + '%';
                info.style.opacity = 1;
                const value = document.createElement("span");
                if((v / max) * 100 <= 87){
                    value.setAttribute("class", "data-done");
                }
                if((v / max) * 100 > 87){
                    value.setAttribute("class", "data-done-outside-info");
                }
                progress.appendChild(value);
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(info);
                
            }

            if (color === "golden") {
                const golden = document.createElement("span");
                if (radius === "true") {
                    golden.setAttribute("class", "koala-radius-golden");
                }
                if (radius === "false") {
                    progress.classList.add("border-radius");
                    golden.setAttribute("class", "koala-golden");
                }
                if (background === "true") {
                    progress.classList.add("background-golden");
                }
                golden.style.width = (v / max) * 100 + '%';
                golden.style.opacity = 1;
                const value = document.createElement("span");
                if((v / max) * 100 <= 87){
                    value.setAttribute("class", "data-done");
                }
                if((v / max) * 100 > 87){
                    value.setAttribute("class", "data-done-outside-golden");
                }
                progress.appendChild(value);
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(golden);
                
            }
        }
    }
    // koala-progress-bar-vertical
    const progress_bar_vertical = document.getElementsByClassName("koala-progress-bar-vertical");
    console.log(progress_bar_vertical.length);
    if (progress_bar_vertical !== null) {
        for (let i = 0; i < progress_bar_vertical.length; i++) {
            const progress = progress_bar_vertical[i];
            const v = parseFloat(progress.getAttribute("data-done"));
            const color = progress.getAttribute("progress-color");
            const background = progress.getAttribute("background-color");
            const min = parseFloat(progress.getAttribute("data-min"));
            const max = parseFloat(progress.getAttribute("data-max"));
            if (v < min) {
                alert(" data-done  <  data-min ");
            }
            if (v > max) {
                alert(" data-done  >  data-max ");
            }
            if (color === "primary") {
                const primary = document.createElement("span");
                primary.setAttribute("class", "koala-vertical-primary");
                if (background === "true") {
                    progress.classList.add("background-primary");
                }
                primary.style.height = (v / max) * 100 + '%';
                primary.style.opacity = 1;
                const value = document.createElement("span");
                value.setAttribute("class", "data-done-primary");
                progress.appendChild(value);
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(primary);

            }
            if (color === "danger") {
                const danger = document.createElement("span");
                danger.setAttribute("class", "koala-vertical-danger");
                if (background === "true") {
                    progress.classList.add("background-danger");
                }
                danger.style.height = (v / max) * 100 + '%';
                danger.style.opacity = 1;
                const value = document.createElement("span");
                value.innerText=((v / max) * 100 + " %");
                value.setAttribute("class", "data-done-danger");
                progress.appendChild(value);
                progress.appendChild(danger);

            }
            if (color === "success") {
                const success = document.createElement("span");
                success.setAttribute("class", "koala-vertical-success");
                if (background === "true") {
                    progress.classList.add("background-success");
                }
                success.style.height = (v / max) * 100 + '%';
                success.style.opacity = 1;
                const value = document.createElement("span");
                value.setAttribute("class", "data-done-success");
                progress.appendChild(value);
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(success);

            }
            if (color === "golden") {
                const golden = document.createElement("span");
                golden.setAttribute("class", "koala-vertical-golden");
                if (background === "true") {
                    progress.classList.add("background-golden");
                }
                golden.style.height = (v / max) * 100 + '%';
                golden.style.opacity = 1;
                const value = document.createElement("span");
                value.setAttribute("class", "data-done-golden");
                progress.appendChild(value);
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress.appendChild(golden);

            }
        }
    }
    //border progress bar
    const progress_bar_dotted = document.getElementsByClassName("koala-progress-bar-dotted");
    if (progress_bar_dotted !== null) {
        for (let i = 0; i < progress_bar_dotted.length; i++) {
            const progress_dotted = progress_bar_dotted[i];
            const v = parseFloat(progress_dotted.getAttribute("data-done"));
            const color = progress_dotted.getAttribute("progress-color");
            const border = progress_dotted.getAttribute("border-color");
            const location = progress_dotted.getAttribute("data-location");
            const min = parseFloat(progress_dotted.getAttribute("data-min"));
            const max = parseFloat(progress_dotted.getAttribute("data-max"));
            if (v < min) {
                alert(" data-done  <  data-min ");
            }
            if (v > max) {
                alert(" data-done  >  data-max ");
            }
            if (color === "primary") {
                const primary = document.createElement("span");
                if (border === "true") {
                    progress_dotted.classList.add("border-primary");
                    primary.setAttribute("class", "koala-dotted-primary");
                }
                if (border === "false") {
                    progress_dotted.classList.add("border-color-none");
                    primary.setAttribute("class", "koala-primary");
                }
                primary.style.width = (v / max) * 100 + '%';
                primary.style.opacity = 1;
                const value = document.createElement("span");

                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-primary");
                    primary.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-primary");
                    progress_dotted.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress_dotted.appendChild(primary);

            }

            if (color === "danger") {
                const danger = document.createElement("span");
                if (border === "true") {
                    progress_dotted.classList.add("border-danger");
                    danger.setAttribute("class", "koala-dotted-danger");
                }
                if (border === "false") {
                    progress_dotted.classList.add("border-color-none");
                    danger.setAttribute("class", "koala-danger");
                }
                danger.style.width = (v / max) * 100 + '%';
                danger.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-danger");
                    danger.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-danger");
                    progress_dotted.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress_dotted.appendChild(danger);

            }

            if (color === "success") {
                const success = document.createElement("span");
                if (border === "true") {
                    progress_dotted.classList.add("border-success");
                    success.setAttribute("class", "koala-dotted-success");
                }
                if (border === "false") {
                    progress_dotted.classList.add("border-color-none");
                    success.setAttribute("class", "koala-success");
                }
                success.style.width = (v / max) * 100 + '%';
                success.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-success");
                    success.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-success");
                    progress_dotted.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress_dotted.appendChild(success);

            }

            if (color === "info") {
                const info = document.createElement("span");
                if (border === "true") {
                    progress_dotted.classList.add("border-info");
                    info.setAttribute("class", "koala-dotted-info");
                }
                if (border === "false") {
                    progress_dotted.classList.add("border-color-none");
                    info.setAttribute("class", "koala-info");
                }
                info.style.width = (v / max) * 100 + '%';
                info.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-info");
                    info.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-info");
                    progress_dotted.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress_dotted.appendChild(info);

            }

            if (color === "golden") {
                const golden = document.createElement("span");
                if (border === "true") {
                    progress_dotted.classList.add("border-golden");
                    golden.setAttribute("class", "koala-dotted-golden");
                }
                if (border === "false") {
                    progress_dotted.classList.add("border-color-none");
                    golden.setAttribute("class", "koala-golden");
                }
                golden.style.width = (v / max) * 100 + '%';
                golden.style.opacity = 1;
                const value = document.createElement("span");
                if (location === "inside") {
                    value.setAttribute("class", "data-done-inside-golden");
                    golden.appendChild(value);
                }
                if (location === "outside") {
                    value.setAttribute("class", "data-done-outside-golden");
                    progress_dotted.appendChild(value);
                }
                const datatext = document.createTextNode((v / max) * 100 + " %");
                value.appendChild(datatext);
                progress_dotted.appendChild(golden);

            }
        }
    }
}