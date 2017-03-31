clay-constants
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/clay-constants
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/clay-constants
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/clay-constants.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/clay-constants
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/clay-constants.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/clay-constants/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/clay-constants
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/clay-constants.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/clay-constants.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/clay-constants
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/clay-constants.svg
[bd_npm_url]: http://www.npmjs.org/package/clay-constants
[bd_npm_shield_url]: http://img.shields.io/npm/v/clay-constants.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Constant variables for clay

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install clay-constants --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const { LogPrefixes } = require('clay-constants')

{
  const { CRYPTO_PREFIX } = LogPrefixes
  /* ... */
}
```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Values.md.hbs" Start -->

<a name="section-doc-guides-03-values-md"></a>

Values
------

+ [CryptFormat](#CryptFormat)
+ [DataTypes](#DataTypes)
+ [DriverSpec](#DriverSpec)
+ [EntitySpec](#EntitySpec)
+ [IdSpec](#IdSpec)
+ [LogPrefixes](#LogPrefixes)
+ [LumpSpec](#LumpSpec)
+ [ReservedResources](#ReservedResources)
+ [ResourceEvents](#ResourceEvents)
+ [ResourceSpec](#ResourceSpec)


<a name="CryptFormat" ></a>

### CryptFormat

| Key | Value |
| --- | ---- |
| DIGEST_ALGORITHM | `sha256` |
| GENERATE_BITS | `512` |
| SIGN_FORMAT | `hex` |


<a name="DataTypes" ></a>

### DataTypes

| Key | Value |
| --- | ---- |
| NUMBER | `cly:number` |
| STRING | `cly:string` |
| BOOLEAN | `cly:boolean` |
| DATE | `cly:date` |
| OBJECT | `cly:object` |
| NULL | `cly:null` |
| REF | `cly:ref` |
| ENTITY | `cly:entity` |
| ID | `cly:id` |


<a name="DriverSpec" ></a>

### DriverSpec

| Key | Value |
| --- | ---- |
| REQUIRED_METHODS | `one,list,create,update,destroy,drop,resources` |
| RESOURCE_BINDABLE_METHODS | `one,list,create,update,destroy,drop,oneBulk,listBulk,createBulk,updateBulk,destroyBulk,cursor` |


<a name="EntitySpec" ></a>

### EntitySpec

| Key | Value |
| --- | ---- |
| RESERVED_ATTRIBUTES | `id,$$at,$$seal,$$by,$$policy,$$as` |


<a name="IdSpec" ></a>

### IdSpec

| Key | Value |
| --- | ---- |
| ID_PATTERN | `/^[a-z0-9\-]+$/` |
| SCOPE_PATTERN | `/^[a-z0-9\-]+$/` |


<a name="LogPrefixes" ></a>

### LogPrefixes

| Key | Value |
| --- | ---- |
| LUMP_PREFIX | `[clay-lump]` |
| DRIVER_PREFIX | `[clay-driver]` |
| CRYPTO_PREFIX | `[clay-crypt]` |
| ID_PREFIX | `[clay-id]` |
| ENTITY_PREFIX | `[clay-entity]` |
| RESOURCE_PREFIX | `[clay-resource]` |
| POLICY_PREFIX | `[clay-policy]` |


<a name="LumpSpec" ></a>

### LumpSpec

| Key | Value |
| --- | ---- |
| NAME_PATTERN | `/^[A-Za-z][A-Za-za-z0-9\-_\.\/]*$/` |


<a name="ReservedResources" ></a>

### ReservedResources

| Key | Value |
| --- | ---- |
| POLICY | `CLYPolicy` |
| SIGNATURE | `CLYSignature` |
| TRACE | `CLYTrace` |
| LOCAL | `CLYLocal` |
| INDICES | `CLYIndices` |
| RELATION | `CLYRelation` |


<a name="ResourceEvents" ></a>

### ResourceEvents

| Key | Value |
| --- | ---- |
| REF_ADD | `cly:ref:add` |
| REF_REMOVE | `cly:ref:remove` |
| ANNOTATION_TOGGLE | `cly:annotate:toggle` |
| POLICY_SET | `cly:policy:set` |
| POLICY_REMOVE | `cly:policy:remove` |
| RESOURCE_SUB | `cly:resource:sub` |
| ENTITY_CREATE | `cly:entity:create` |
| ENTITY_CREATE_BULK | `cly:entity:create:bulk` |
| ENTITY_UPDATE | `cly:entity:update` |
| ENTITY_UPDATE_BULK | `cly:entity:update:bulk` |
| ENTITY_DESTROY | `cly:entity:destroy` |
| ENTITY_DESTROY_BULK | `cly:entity:destroy:bulk` |
| ENTITY_DROP | `cly:entity:drop` |
| ENTITY_DROP_BULK | `cly:entity:drop:bulk` |


<a name="ResourceSpec" ></a>

### ResourceSpec

| Key | Value |
| --- | ---- |
| NAME_PATTERN | `/^[A-Za-z][A-Za-za-z0-9\-_\.]*$/` |
| DOMAIN_PATTERN | `/^[A-Za-z][A-Za-za-z0-9\-_\.]*$/` |




<!-- Section from "doc/guides/03.Values.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/clay-constants/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ClayDB][clay_d_b_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[clay_d_b_url]: https://github.com/realglobe-Inc/claydb
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
