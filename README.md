# TDM (taffy's D&S management) Naive Demo
Everything is just naive.

```
+-------------------------------+
|        [exec]                 |
| component -> le               |
|    |`- createState            |
|    |`- createState            |
|    |      |                   |
|    |      | [render]          |
| +- | ---- ` DOM --------------------+
| |  [User interface]           |     |
| |  |                          |     |
| |  |        [re-exec]         |     |
| |   `- setState -> le cmp old |     |
+ | ------------------- | ------+     |
  |                     | [re-render] |
  |                     ` DOM         |
  +-----------------------------------+
```
