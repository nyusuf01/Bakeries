# PROJECT ISSUE TICKET

## Unexpected Behavior

> Showing TypeError: Cannot read property 'toLowerCase' of undefined

## Expected Behavior

>

## Reproduce the Error

> // filter through bakeries from props to find any with a matching .fields.city
> 21 | const matchingBakeries = bakeries.filter((bakery) => {
> 22 | return bakery.fields.city.toLowerCase().includes(findCity.toLowerCase());

     | ^  23 | });

24 |
25 | useEffect(() => {

```md
1. Clone this repo.
2. Run `npm start`.
3. Navigate to the landing page.
4. Click on Best Bakeries, which should return the API data set.

or on deployed site
```

## Documentation

> {error: "NOT_FOUND"}
> error: "NOT_FOUND"

```md

```

## Attempted Resolution

>

```md

```
