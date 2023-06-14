import Stripe from "stripe"

const products = new Map([
  [1, { priceInCents: 10995, Name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' }],
  [2, { priceInCents: 2230, Name: 'Mens Casual Premium Slim Fit T-Shirts' }]
])


export default defineEventHandler(async (event) => {
  console.log(useRuntimeConfig().stripeSecret)
  const body = await readBody(event)

  const data: any = await $fetch('https://fakestoreapi.com/products/' + body.id)

  const stripe = new Stripe(useRuntimeConfig().stripeSecret, { apiVersion: '2022-11-15' })
  try {
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
        allowed_countries: ['US', 'GB', 'FR', 'IN', 'CA']
      }
    })
    return JSON.stringify(session.url)
  } catch (error) {
    console.log(error)
    return error
  }

})