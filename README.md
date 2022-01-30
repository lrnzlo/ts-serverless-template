# INSTALLATION
> ⚠️ NOTICE: 
>
> This package is setup to be used with [serverless framework](https://www.serverless.com/framework/docs/) connected to (aws)[https://www.serverless.com/framework/docs/providers/aws/].
>
> To set up with other provider please refer to serverless framework docs.

In order to use this template pleas sign up to [aws](https://aws.amazon.com
) and follow the instruction to configure your profile via ``aws-cli`` or with other options as explain in [sls docs]((https://www.serverless.com/framework/docs/providers/aws/guide/credentials)).

After that run
```bash
yarn sls:deploy:dev
```

This may take a while when prompted with an URL try to send a GET request via API platform of your choice such as [Postman](https://www.postman.com) or [Insomnia](https://insomnia.rest
) or via
```bash
curl GET URL/RETURNED/FROM/YARN/SLS:DEPLOY:DEV
```

This should return 'Hello, World!'


# Dependecies Docs
> ### [Serverless Framework](https://www.serverless.com/framework/docs/)
> A framework to abstract deployment fatique on serverless service such as Aws, Azure etc...

> ### [dotenv-safe](https://github.com/rolodato/dotenv-safe)
>
> Like [dotenv](https://github.com/motdotla/dotenv) but much safer! Check if env variable is fill or not.

> ### [eslint](https://github.com/eslint/eslint)
> 
> Lint your code. Feel free to play around with the rule.

> ### [ts-jest](https://github.com/kulshekhar/ts-jest)
> 
> Jest test framework but for typescript.

> ### [ts-node](https://github.com/TypeStrong/ts-node)
> 
> Runtime for Typescript.

> ### [typescript](https://www.typescriptlang.org/docs)
> 
> Typescript Docs

