// Code from CSV row
public TransformerFactory createTransformerFactory() {
        TransformerFactory factory = TransformerFactory.newInstance();
        // Enable the Security feature by default
        try {
            factory.setFeature(javax.xml.XMLConstants.FEATURE_SECURE_PROCESSING, true);
        } catch (TransformerConfigurationException e) {
            LOG.warn("TransformerFactory doesn't support the feature {} with value {}, due to {}.", new Object[]{javax.xml.XMLConstants.FEATURE_SECURE_PROCESSING, "true", e});
        }
        factory.setErrorListener(new XmlErrorListener());
        return factory;
    }
