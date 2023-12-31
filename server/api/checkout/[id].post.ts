import Stripe from "stripe"



export default defineEventHandler(async (event) => {
  // Basicaly gets the stripe secret(specified from the .env in nuxt.config.ts)
  // console.log(useRuntimeConfig().stripeSecret)
  
  // Reads the request body for product id
  const body = await readBody(event)

  // Gets the product data for product ids specified
  const data: any = await $fetch('https://fakestoreapi.com/products/' + body.id)

  const stripe = new Stripe(useRuntimeConfig().stripeSecret, { apiVersion: '2022-11-15' })
  try {
    // Generates a link for checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.URL}/success`,
      cancel_url: `${process.env.URL}/cancel`,
      line_items: [{
        price_data: {
          currency: 'inr',
          product_data: {
            name: data.title,
            description: data.description,
          },
          unit_amount: data.price * 100 * 25,
        },
        adjustable_quantity: {
          enabled: true,
          maximum: 999,
          minimum: 1
        },
        quantity: 1
      }],
      shipping_address_collection: {
        allowed_countries: ['US', 'GB', 'FR', 'IN', 'CA', 'DE']
      }
    })
    return JSON.stringify(session.url)
  } catch (error) {
    console.log(error)
    return error
  }

})
