# GitHub Pages Deployment Guide

## Pre-Deployment Checklist

- [ ] All HTML pages created
- [ ] CSS styling complete
- [ ] JavaScript functionality working
- [ ] All assets (images, icons) in place
- [ ] ESLint passes: `npm run lint`
- [ ] Prettier formatted: `npm run format`
- [ ] W3C HTML validation passed
- [ ] Lighthouse audit score 90+
- [ ] Mobile responsive testing complete
- [ ] All links working (internal and external)
- [ ] No console errors in browser dev tools

## GitHub Pages Setup

### Step 1: Ensure Repository Settings

1. Navigate to your GitHub repository
2. Go to **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
4. Click **Save**

### Step 2: Repository Configuration

The repository should have:

- `.git` directory (initialized git repo)
- All files committed to the main branch
- Public repository (or enable Pages for private repos)

### Step 3: Verify Deployment

1. GitHub will display the URL: `https://username.github.io/PersonalSite`
2. Wait 1-2 minutes for initial deployment
3. Visit the URL to verify site is live
4. Check browser console for errors

## File Structure for GitHub Pages

GitHub Pages automatically serves the root folder contents. Ensure:

```
repository-root/
├── index.html        # Home page (must exist)
├── projects.html
├── about.html
├── assets/
├── css/
├── js/
└── docs/
```

**Important**: `index.html` must be in the root directory.

## Deployment via Git

### Initial Deployment

```bash
# Ensure all changes are committed
git add .
git commit -m "Initial deploy to GitHub Pages"
git push origin main
```

### Updates After Initial Deployment

```bash
# Make changes locally
# Test with: npm run serve

# Commit changes
git add .
git commit -m "Update: [describe changes]"

# Push to GitHub
git push origin main

# Site updates automatically within 1-2 minutes
```

## Custom Domain (Optional)

To use a custom domain:

1. In **Settings** → **Pages**, enter your domain in "Custom domain"
2. Configure DNS settings with your domain provider
3. Add CNAME file to repository root (optional, GitHub does this automatically)

See [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed setup.

## Troubleshooting

### Site Not Appearing

- Verify `index.html` exists in repository root
- Check that Pages is enabled in repository settings
- Wait 1-2 minutes for initial build
- Check GitHub Actions tab for build errors

### Broken Links

- Use relative paths: `/css/style.css` not `https://domain.com/css/style.css`
- Test locally first: `npm run serve`
- Verify file names match exactly (case-sensitive)

### HTTPS Issues

GitHub Pages automatically provides HTTPS. No configuration needed.

### Performance Issues

- Optimize images before uploading
- Minimize CSS/JavaScript (optional)
- Use compression where possible
- Check Lighthouse audit

## GitHub Actions (Optional)

GitHub Pages automatically builds and deploys. No action needed for static sites.

For custom builds (if needed in future):

1. Create `.github/workflows/deploy.yml`
2. Configure workflow for your build process
3. Commit and push

## Monitoring Deployment

### Check Deployment Status

In repository settings → Pages:

- Green checkmark = deployed successfully
- Shows current live URL
- Shows deployment time

### View Deployment History

Settings → Environments → `github-pages` → Deployments

### Enable GitHub Pages Alerts

1. Go to **Settings**
2. Check "Pages" section for any warnings
3. Subscribe to notifications for deployment issues

## Post-Deployment

### Verify Site Quality

1. Visit live URL
2. Test on multiple devices and browsers
3. Use Lighthouse DevTools audit
4. Check that all features work
5. Verify SEO meta tags

### Maintenance

- Keep repository up to date
- Monitor for security updates
- Update dependencies with `npm update`
- Test changes locally before pushing
- Keep documentation current

## Rollback

If issues occur after deployment:

```bash
# Revert last commit
git revert HEAD
git push origin main

# Or go back to previous commit
git reset --hard <commit-hash>
git push origin main --force
```

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuring GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages)
- [Custom Domains & SSL](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#limits-on-use-of-github-pages)

---

**Last Updated**: [Date]
