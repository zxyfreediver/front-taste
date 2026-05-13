# Information Architecture

## Routes

```txt
/
/en
/zh
/en/docs/install        -> /en#install
/zh/docs/install        -> /zh#install
/en/docs/what-is-a-frontend-skill
/zh/docs/what-is-a-frontend-skill
/en/styles             -> /en
/zh/styles             -> /zh
/en/styles/[slug]      -> /en?style=[slug]#demo
/zh/styles/[slug]      -> /zh?style=[slug]#demo
/previews/[slug]/landing
/previews/[slug]/dashboard
/previews/[slug]/settings
/downloads/[slug]
/en/request            -> /en#request
/zh/request            -> /zh#request
/en/changelog
/zh/changelog
```

## Primary Flow

1. User lands on the immersive home page.
2. User chooses one of 8 style buttons at the top of the page.
3. The page updates the root `data-style` and the hero, demos, install panel, and request panel switch immediately.
4. User reviews the landing, dashboard, and settings demo carousel for the selected style.
5. User downloads the selected Skill or sends a new style request.

## Navigation

Top navigation links to Demo, Install, Request, and language switch. The old style list and style detail routes redirect back into the immersive homepage so there is one primary product surface.
