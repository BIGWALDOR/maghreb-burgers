export default {
  name: 'burger',
  title: 'Burger',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      required: true,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      required: true,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      required: true,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      required: true,
    },
  ],
}
