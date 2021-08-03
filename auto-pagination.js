function AutoPagination(total_item, item_per_page, max_button, container_id, cur_page, change_page_func){
    let total_page = Math.ceil (total_item / item_per_page)

    let pagination_container = document.getElementById(container_id)

    pagination_container.innerHTML = '<nav><ul class="pagination" id="'+container_id+'_inner_container"></ul></nav>'

    let child_container = document.getElementById(container_id+'_inner_container')

    let prev = cur_page - 1
    let next = cur_page + 1

    if(prev == 0){
        child_container.innerHTML += '<li class="page-item disabled"><span class="page-link">Previous</aspan></li>'
    }else{
        child_container.innerHTML += '<li class="page-item"><a class="page-link" href="#" onclick="'+change_page_func+'('+prev.toString()+')">Previous</a></li>'
    }

    if(total_page==1){
        child_container.innerHTML += '<li class="page-item active"><span class="page-link">1</span></li>'
    }else if(total_page <= max_button){

        let page_num = 1
        while(total_page >= page_num){
            if(page_num == cur_page){
                child_container.innerHTML += '<li class="page-item active"><span class="page-link">'+page_num.toString()+'</span></li>'
            }else{
                child_container.innerHTML += '<li class="page-item"><a class="page-link" href="#" onclick="'+change_page_func+'('+page_num.toString()+')">'+page_num.toString()+'</a></li>'
            }
            page_num+=1
        }

    }else{
        let render_list = [1,total_page]

        if(render_list.includes(cur_page-1) == false && cur_page-1 > 0){
            render_list.push(cur_page-1)
        }
        if(render_list.includes(cur_page) == false){
            render_list.push(cur_page)
        }
        if(render_list.includes(cur_page+1) == false && cur_page+1 <= total_page){
            render_list.push(cur_page+1)
        }

        render_list = render_list.sort(function (a, b) {return a-b})

        for(let i=0;i<render_list.length;i++){
            if(i>0 && render_list[i]>render_list[i-1]+1){
                child_container.innerHTML += '<li class="page-item disabled"><span class="page-link">...</span></li>'
            }
            let page_num = render_list[i]
            if(page_num == cur_page){
                child_container.innerHTML += '<li class="page-item active"><span class="page-link">'+page_num.toString()+'</span></li>'
            }else{
                child_container.innerHTML += '<li class="page-item"><a class="page-link" href="#" onclick="'+change_page_func+'('+page_num.toString()+')">'+page_num.toString()+'</a></li>'
            }
        }
    }

    if(next > total_page){
        child_container.innerHTML += '<li class="page-item disabled"><span class="page-link">Next</span></li>'
    }else{
        child_container.innerHTML += '<li class="page-item"><a class="page-link" href="#" onclick="'+change_page_func+'('+next.toString()+')">Next</a></li>'
    }
}