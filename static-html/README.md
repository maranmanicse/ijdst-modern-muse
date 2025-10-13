# IJDST Static HTML Website

This folder contains static HTML files for the International Journal for Development of Science & Technology (IJDST) website.

## Files Included

1. **index.html** - Homepage with hero section, about, and services
2. **current-issue.html** - Display current journal issue and articles
3. **archive.html** - Browse and search past journal issues with filtering
4. **submission.html** - Multi-step submission form for authors
5. **editorial-board.html** - Display editorial board members

## Features

- **Responsive Design** - Works on all devices (mobile, tablet, desktop)
- **Tailwind CSS** - Using CDN for styling (no build process required)
- **Vanilla JavaScript** - All interactivity without frameworks
- **No Dependencies** - Self-contained HTML files ready for integration

## Usage

Simply upload these HTML files to your web server or integrate them into your Laravel application.

### For Laravel Integration

1. Place HTML files in your Laravel `resources/views` directory
2. Convert to Blade templates by adding `.blade.php` extension
3. Replace static navigation links with Laravel routes: `{{ route('routename') }}`
4. Add CSRF tokens to forms: `@csrf`
5. Use Laravel's asset helpers for any assets: `{{ asset('path/to/file') }}`

## Customization

### Colors
The primary color scheme uses blue tones. To change:
- Update Tailwind classes (e.g., `bg-blue-600` to `bg-green-600`)
- Modify `.gradient-primary` in the `<style>` section

### Content
All content is directly in the HTML files and can be edited as needed.

### Forms
The submission form includes validation and uses `preventDefault()` to handle submission. Connect to your backend by:
1. Add `action` and `method` attributes to forms
2. Replace JavaScript submit handler with actual form submission
3. Add server-side validation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All JavaScript is inline and minimal
- Forms include basic HTML5 validation
- Archive page has search/filter functionality
- Mobile menu toggles work on all pages
- No external dependencies required