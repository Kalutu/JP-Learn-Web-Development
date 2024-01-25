# Tables

HTML tables allow web developers to arrange data into rows and columns.
Tables in HTML are created using the `<table>` element, with rows defined by `<tr>` (table row) and cells within each row defined by `<td>` (table data) elements.

### Table Cells

Each table cell is defined by a `<td>` and a `</td>` tag.
td stands for table data. Everything between <td> and </td> are the content of the table cell.

### Table Rows

Each table row starts with a `<tr>` and ends with a `</tr>` tag.
tr stands for table row.

### Table Headers

Sometimes you want your cells to be table header cells. In those cases use the <th> tag.
th stands for table header.

### Table Caption

You can add a caption that serves as a heading for the entire table.

**Note: The <caption> tag should be inserted immediately after the `<table>` tag.**

### Colspan & Rowspan

HTML tables can have cells that span over multiple rows and/or columns.
To make a cell span over multiple columns, use the colspan attribute
**Note: The value of the colspan attribute represents the number of columns to span.**
To make a cell span over multiple rows, use the rowspan attribute
**Note: The value of the rowspan attribute represents the number of rows to span.**

### Colgroup

If you want to style the two first columns of a table, use the <colgroup> and <col> elements.
The `<colgroup>` element should be used as a container for the column specifications.
Each group is specified with a `<col>` element.
The span attribute specifies how many columns that get the style.
The style attribute specifies the style to give the columns.
