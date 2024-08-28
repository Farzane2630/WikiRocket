import React from 'react'

export default async function GetWikiResults(searchTerm: string) {
   const searchParams = new URLSearchParams({
      // required for wikipedia api
      action: 'query',
      generator: 'search',
      gsrsearch: searchTerm,
      gsrlimit: '20',
      prop:'pageimages|extracts',
      exchars:'100',
      exintro:'true',
      exlimit: 'max',
      format: 'json',
      origin: '*'
   })
const response = await fetch('http://en.wikipedia.org/w/api.php?' + searchParams)

return response.json()

}
