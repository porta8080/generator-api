# Yeoman generator for an API backend.

## Getting started

To install the Full Api Generator, simply run

`npm install -g generator-full-api`

To create a new project run the following command

`yo full-api <project name>`

### options

- `--nr` : create a new project without a HelloWorld resource

> If you don't provide a project name, you will be prompted for it in the next step

## Resources

To create a new resource, execute

`yo full-api:resource <resource name>`

### options

- `--nr` : create a new resource without a routes file
- `--nc` : create a new resource without a controller
- `--nd` : create a new resource without a DAO class
- `--nm` : create a new resource without a model
- `--routes` : **boolean**. Sets whether this resource must contain a routes file or not
- `--controller` : **boolean**. Sets whether this resource must contain a controller or not
- `--dao` : **boolean**. Sets whether this resource must contain a DAO class or not
- `--model` : **boolean**. Sets whether this resource must contain a model or not
