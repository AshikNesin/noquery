## NoQuery
This project is intended to ease the use of simple JS functionalities and minimize code.

- No dependencies
- AMD, Node & browser ready

### Install

You can install it with :

```shell
	npm install noquery --save
```

### Selectors
```js
	// get by id
	S('#iddiv');
	// get by class name
	S('.classdiv');
	// get by element name
	S('@namediv');
	// get by element tag name
	S('=div');
	// get element by query selector
	S('*div div.inside');
	// getAttribute of name
	S('#iddiv').getAttribute('name');
	// getAttribute of name from nodelist
	S('.classdiv')[0].getAttribute('name');
```
### Elements

```js
	// executes callback if the selector exists
	NQ.exists( selector , callback );
```
### Validation
```js
	// returns true/false based on the given param
	NQ.isEmail( emailID )
```

