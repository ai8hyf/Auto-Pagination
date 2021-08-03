# Auto-Pagination

### this script works with Bootstrap but can be modified to adapt other situations.
The **AutoPagination()** function automatically render the pagination component base on your needs. The component will include:
- PREVIOUS button
- the first page #
- ...
- current page # - 1
- current page #
- current page # + 1
- ...
- the last page #
- NEXT button

| Parameter        	| Data Type 	| Example             	| Description                                                                                                                                                                                                                                              	|
|------------------	|-----------	|---------------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| total_item       	| int       	| 200                 	| The script needs this value to determine how many pages in total.                                                                                                                                                                                        	|
| item_per_page    	| int       	| 10                  	| How many items do you want to display for each page. This value is only used for determining the total page number.                                                                                                                                      	|
| max_button       	| int       	| 8                   	| The maximun pagination button you want to show. For example, if you have more than 8 pages, the script will only render the first, last page, and the current page and its neighbors. If you have less than 8 pages, the script will render all of them. 	|
| container_id     	| string    	| "pagination_parent" 	| The parent container id for the pagination component.                                                                                                                                                                                                    	|
| cur_page         	| int       	| 2                   	| The current page number.                                                                                                                                                                                                                                 	|
| change_page_func 	| string    	| "change_page"       	| The callback function for clicking the page numbers. It will be used as an onclick attribute inside each page button. Example: onclick="change_page(page_number_integer)"                                                                                	|

### Usage

```
<!-- The Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<!-- Some HTML comonents -->
<div class="container">
    <div id="pagination" style="margin-top:20px;"></div>
    <div id="items"></div>
</div>

<!-- The Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<script src="auto-pagination.js"></script>
<script>
    let cur_page = 1
    let total_item = 1000
    let item_per_page = 20
    let max_button = 8
    let parent_id = "pagination"

    AutoPagination(total_item, item_per_page, max_button, parent_id, cur_page, 'change_page')

    // this is a sample function for changing pages
    function change_page(new_page){
        AutoPagination(total_item, item_per_page, max_button, parent_id, new_page, 'change_page')
    }
</script>
```
