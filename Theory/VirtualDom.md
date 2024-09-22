Virtual DOM

```
React mein Virtual DOM ek tarah ka lightweight in-memory representation hota hai actual DOM ka. Jab hum koi React component update karte hain, React pehle Virtual DOM ko update karta hai, aur phir usse compare karta hai actual DOM se. Ye process efficient hai kyunki Virtual DOM ko manipulate karna actual DOM se zyada fast hota hai.

What is Virtual DOM?
Virtual DOM ek JavaScript object hota hai jo HTML DOM ka ek virtual representation rakhta hai. Jab bhi humara UI update hota hai, React Virtual DOM ko pehle update karta hai instead of directly updating the real DOM, kyunki real DOM ko update karna expensive hota hai.

Why use Virtual DOM?
Agar hum real DOM ko baar-baar update karein, to performance issues ho sakte hain. React Virtual DOM ka use karke ye ensure karta hai ki sirf necessary updates hi real DOM pe apply kiye jaayein. Is process mein, pehle Virtual DOM update hota hai, fir Virtual DOM aur Real DOM ka comparison hota hai (diffing algorithm ke through), aur jo changes chahiye hote hain, wahi real DOM mein update hote hain (reconciliation ke through).
ss
```

Reconciliation Algorithm

```
Reconciliation ka matlab hota hai ki React decide karta hai ki Virtual DOM mein changes ko real DOM mein kaise apply karein. Jab bhi state ya props change hote hain, React pehle Virtual DOM ko re-render karta hai, aur fir naye Virtual DOM ko purane Virtual DOM ke saath compare karta hai. Ye comparison hota hai diffing algorithm se.

Key Points:
Fast Updates: Agar ek element ka type same rahta hai, React us element ke children ko bhi compare karta hai.
Unique Key: Agar hum lists ya arrays ke elements ko render karte hain, to React ko efficient reconciliation ke liye unique keys chahiye hoti hain. Ye keys React ko help karti hain purane aur naye elements ko match karne mein.
```

Diffing Algorithm

```
Diffing algorithm ek process hai jisme React Virtual DOM ke current aur previous states ko compare karta hai taaki decide kar sake ki actual DOM mein kaunsa change apply karna hai. Ye algorithm efficiently changes ko track karta hai, aur unnecessary updates ko avoid karta hai.

Kaise Kaam Karta Hai:

Jab React Virtual DOM ko re-render karta hai, wo current aur previous versions ko compare karta hai.
React check karta hai ki kya node types same hain. Agar different hain, to React pura node replace kar deta hai.
Agar node types same hain, to React deeply check karta hai children aur attributes ko, aur sirf wahi parts update karta hai jo badle hain.
Performance Optimization:

Diffing algorithm ka purpose hai ki real DOM pe kam se kam operations ho. React changes ko batch karta hai, aur sabse necessary changes ko real DOM mein apply karta hai.
```

Summary

```
React mein Virtual DOM ek lightweight copy hota hai real DOM ka. Jab humara UI update hota hai, React pehle Virtual DOM update karta hai aur fir use actual DOM ke saath compare karta hai. Is process mein jo bhi changes zaruri hote hain, sirf wahi real DOM pe lagte hain (using reconciliation and diffing algorithm), isliye React ki performance fast hoti hai.
```
