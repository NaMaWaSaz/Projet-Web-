// Add to existing products.js routes

// Get product variants
router.get('/:id/variants', async (req, res, next) => {
  try {
    const variants = await getProductVariants(req.params.id);
    res.json(variants);
  } catch (error) {
    next(error);
  }
});

// Add product variant
router.post('/:id/variants',
  authenticate,
  authorize(['seller', 'admin']),
  async (req, res, next) => {
    try {
      const variant = await addProductVariant(req.params.id, req.body);
      res.status(201).json(variant);
    } catch (error) {
      next(error);
    }
  }
);

// Update product specifications
router.put('/:id/specifications',
  authenticate,
  authorize(['seller', 'admin']),
  async (req, res, next) => {
    try {
      await updateProductSpecifications(req.params.id, req.body.specifications);
      res.json({ message: 'Specifications updated successfully' });
    } catch (error) {
      next(error);
    }
  }
);

// Set primary product image
router.put('/:id/images/:imageId/primary',
  authenticate,
  authorize(['seller', 'admin']),
  async (req, res, next) => {
    try {
      await setPrimaryImage(req.params.id, req.params.imageId);
      res.json({ message: 'Primary image updated successfully' });
    } catch (error) {
      next(error);
    }
  }
);