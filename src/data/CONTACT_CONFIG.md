# Contact configuration

Edit `contact.json` to change the information shown by the website and saved into the downloaded vCard.

- `name`, `organization`, `title`, `phone`: main contact details
- `email`: email address, or `null` when there is none
- `slogan`, `serviceArea`: page copy
- `website`: leave empty (`""`) to automatically use the deployed site origin; set a URL to override it
- `socialLinks`: only these defined links are opened and saved to the vCard
- `location`: the contact address used for Google Maps directions and the downloaded vCard. The website does not embed a map; it only shows the configured location.
- `services`: service cards and service modal content

The vCard and Get Directions action intentionally use the same `location` object so they cannot drift apart when the JSON is updated. The website map has been removed.
