# CVR-api
Package for search in danish CVR (VAT) register 

The CVR-api can be used for searching in the danish and norwegian CVR register.
CVR number, p-number and company name can be used as search parameters to find a company in the register. Country is required. 
It is also possible to search for a company specifically by cvr, name, phone or productionunits.

## Install

```
npm install @arpi-1902/cvr-api
```

## Usage

#### Get company from register by search:

```
import { getCompanyBySearch } from '@arpi-1902/cvr-api'

const result = getCompanyBySearch (search input, country)
```

#### Get company from register by VAT

Note: VAT must be a number

```
import { getCompanyByVat } from '@arpi-1902/cvr-api'

const result = getCompanyByVat (vat, country)
```

#### Get company from register by name

```
import { getCompanyByName } from '@arpi-1902/cvr-api'

const result = getCompanyByName (name, country)
```

#### Get company from register by productionunit

```
import { getCompanyByProdu } from '@arpi-1902/cvr-api'

const result = getCompanyByProdu (produ, country)
```

#### Get company from register by phonenumber

```
import { getCompanyByPhone } from '@arpi-1902/cvr-api'

const result = getCompanyByPhone (phone, country)
```
