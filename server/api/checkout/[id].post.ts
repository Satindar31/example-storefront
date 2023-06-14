import Stripe from "stripe"

export default defineEventHandler(async (event) => {
  console.log(useRuntimeConfig().stripeSecret)
  console.log(readBody(event))
  
  const stripe = new Stripe(useRuntimeConfig().stripeSecret, {apiVersion: '2022-11-15'})
  try {
    const session = stripe.checkout.sessions.create({
      payment_method_types: ['card', 'cashapp', 'paypal', 'link'],
      mode: 'payment',
      success_url: `${process.env.URL}/success`,
      cancel_url: `${process.env.URL}/cancel`,
    })
  } catch (error) {
    
  }
  
})