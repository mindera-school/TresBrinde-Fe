# Frontend repository of the Tres Brinde project

<img src="https://github.com/mindera-school/TresBrinde-Fe/assets/117355219/6ca8b131-0f46-4a91-a5df-c0f42d44000c">

## About the project

This repository consistes of the Front End app of the Tres Brinde Online Catalog. Tres Brinde is a store that sells all types of branding and publicity goods, as well as the printing of such goods. The objective of this online catalog is to allow customers to see every product available and all methods of printing. The site has right now the core feature of being able to make a list of products of interest, like a cart, and then the user can request a budget for the products in the list. Also the admin can upload an excel file so that they can update the store with new products.

### Vision for the future

Right now the app has a account systems created but not implemented. In the future, the objective is that the users can send budget requests linked with their accounts. Also the admin backoffice is created but not totally implemented. As of now, the admin can login for access to this backoffice where he can upload an excel to update the database and download an excel with all current info in the database. The objective is that this backoffice is further developed somewhere in the future so that the admin can create, update and delete, categories, subcategories and products.

### Built with

<ul>
<li><img src="https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png" style="height: 60px" ></li>
<li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" style="height: 60px" ></li>
<li><img src="https://static-00.iconduck.com/assets.00/ant-design-icon-512x512-ncocfg8e.png" style="height: 60px" ></li>
</ul>

### How to run

- Clone the repository: `git clone git@github.com:mindera-school/TresBrinde-Fe.git`
- Run "yarn install" on your code editor / IDE terminal
- Run "yarn start" or "yarn start:dev" to run the project

### Navigating the project

**By Folders**

- `public:` This folder only contains the source Html for the React app and the favicon of the site.
- `components` Contains all standalone components for some specific contexts or common components for reiterated use.
- `constants:` To define variable constants or routes for the app
- `dataJson` Is used for non variable data and to define mocked info ( banner and customization services)
- `hooks` Contains custom hooks
- `images` Used to store icons and other needed images
- `pages` Contains all pages called for the app routes
- `redux` Contains redux needed dat like actions, reducers, store and custom defined types
- `routers` Contains all files used to define the app routes
- `services` Used to store all the servies that make calls to the API
- `styles` Used for sass content, divided in components, elements and app base. The variables folder contains all defined data like breakpoints, colors, sizes and all other things defined by the design on the **StyleGuide** tab.

### Important documents

- Design and Site Map: https://www.figma.com/file/6h0XmTKftJgYZ0S9nIPsKg/Tr%C3%AAs-Brinde?type=design&node-id=0-1&t=cvVuC31PtfitPUCT-0

- Jira: https://m-school5.atlassian.net/jira/software/projects/TRES/boards/1/backlog?selectedIssue=TRES-32

**Jira contains all taks that were done and also all pending tasks that we though for the product**

### Contribution guidelines

- Writing tests
- Code review
- Other guidelines

### Who do I talk to?

- Repo owner or admin
- Other community or team contact

### License

Distributed under the MIT License. See LICENSE.txt for more information.
