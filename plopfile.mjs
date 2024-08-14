export default function (plop) {
  plop.setGenerator("component", {
    description: "Cria um novo componente",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "Qual o nome do componente?",
      },
    ],

    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/index.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.component.tsx",
        templateFile: "plop-templates/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "plop-templates/test.hbs",
      },
    ],
  });
}
