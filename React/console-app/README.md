# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


User:
Fields:
firstname: input textlastname: input textgender: select optionrole: select option (db role den çekilecek)
Columns:
First nameLast nameGenderRoles (custom render)
 
Role:
Fields:
name: input text permissions: select option (db permission dan çekilecek) multiple
Columns:
NamePermissions (modal)
 
Permissions:
Fields:
name: input text
Columns:
Name
 
Task:
Fields:
name: input text
Columns:
Name
 
Flow:
Fields:
name: input text tasks: select option (db task dan çekilecek) multiple
Columns:
NameTask 