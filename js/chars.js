const CHARS={
bunny:`<svg viewBox="0 0 200 210" role="img" aria-label="Kelinci putih lucu memeluk hati"><g class="bob">
<ellipse cx="72" cy="50" rx="15" ry="40" fill="#fff" stroke="#f2a8c6" stroke-width="3" transform="rotate(-10 72 50)"/>
<ellipse cx="72" cy="54" rx="7" ry="27" fill="#ffc9dd" transform="rotate(-10 72 54)"/>
<ellipse cx="128" cy="50" rx="15" ry="40" fill="#fff" stroke="#f2a8c6" stroke-width="3" transform="rotate(10 128 50)"/>
<ellipse cx="128" cy="54" rx="7" ry="27" fill="#ffc9dd" transform="rotate(10 128 54)"/>
<ellipse cx="100" cy="170" rx="46" ry="34" fill="#fff" stroke="#f2a8c6" stroke-width="3"/>
<circle cx="100" cy="112" r="52" fill="#fff" stroke="#f2a8c6" stroke-width="3"/>
<g class="eyes"><circle cx="80" cy="108" r="6" fill="#43356b"/><circle cx="120" cy="108" r="6" fill="#43356b"/><circle cx="82" cy="106" r="2" fill="#fff"/><circle cx="122" cy="106" r="2" fill="#fff"/></g>
<ellipse cx="65" cy="124" rx="9" ry="6" fill="#ffadc8" opacity=".75"/><ellipse cx="135" cy="124" rx="9" ry="6" fill="#ffadc8" opacity=".75"/>
<ellipse cx="100" cy="119" rx="5" ry="3.5" fill="#f58cb2"/>
<path d="M92 127q8 8 16 0" fill="none" stroke="#43356b" stroke-width="3" stroke-linecap="round"/>
<path d="M100 196c-12-8-20-13-20-21a10 10 0 0 1 20-4 10 10 0 0 1 20 4c0 8-8 13-20 21z" fill="#ff7fa8"/>
<circle cx="74" cy="178" r="9" fill="#fff" stroke="#f2a8c6" stroke-width="3"/><circle cx="126" cy="178" r="9" fill="#fff" stroke="#f2a8c6" stroke-width="3"/>
</g></svg>`,
bear:`<svg viewBox="0 0 200 210" role="img" aria-label="Beruang biru lucu"><g class="bob">
<circle cx="56" cy="62" r="21" fill="#bfe3ff" stroke="#86bcec" stroke-width="3"/><circle cx="56" cy="62" r="10" fill="#e9f5ff"/>
<circle cx="144" cy="62" r="21" fill="#bfe3ff" stroke="#86bcec" stroke-width="3"/><circle cx="144" cy="62" r="10" fill="#e9f5ff"/>
<ellipse cx="100" cy="172" rx="46" ry="34" fill="#bfe3ff" stroke="#86bcec" stroke-width="3"/>
<ellipse cx="100" cy="178" rx="26" ry="19" fill="#e9f5ff"/>
<circle cx="100" cy="106" r="54" fill="#bfe3ff" stroke="#86bcec" stroke-width="3"/>
<ellipse cx="100" cy="124" rx="24" ry="18" fill="#eef8ff"/>
<g class="eyes"><circle cx="78" cy="102" r="6" fill="#2f3a6e"/><circle cx="122" cy="102" r="6" fill="#2f3a6e"/><circle cx="80" cy="100" r="2" fill="#fff"/><circle cx="124" cy="100" r="2" fill="#fff"/></g>
<ellipse cx="62" cy="120" rx="9" ry="6" fill="#ffb3cd" opacity=".8"/><ellipse cx="138" cy="120" rx="9" ry="6" fill="#ffb3cd" opacity=".8"/>
<ellipse cx="100" cy="117" rx="6" ry="4.2" fill="#2f3a6e"/>
<path d="M100 121v5m-8 2q8 7 16 0" fill="none" stroke="#2f3a6e" stroke-width="3" stroke-linecap="round"/>
<path d="M100 198c-10-7-16-11-16-17a8 8 0 0 1 16-3 8 8 0 0 1 16 3c0 6-6 10-16 17z" fill="#ff8db3"/>
</g></svg>`,
cat:`<svg viewBox="0 0 200 210" role="img" aria-label="Kucing pink lucu"><g class="bob">
<path class="tail" d="M138 192q36 0 28-38" fill="none" stroke="#f2a2c0" stroke-width="11" stroke-linecap="round"/>
<path d="M48 96L54 40L96 72z" fill="#ffd3e3" stroke="#f2a2c0" stroke-width="3" stroke-linejoin="round"/><path d="M60 84L63 56L84 72z" fill="#ff9fc0"/>
<path d="M152 96L146 40L104 72z" fill="#ffd3e3" stroke="#f2a2c0" stroke-width="3" stroke-linejoin="round"/><path d="M140 84L137 56L116 72z" fill="#ff9fc0"/>
<ellipse cx="100" cy="176" rx="42" ry="30" fill="#ffd3e3" stroke="#f2a2c0" stroke-width="3"/>
<ellipse cx="100" cy="116" rx="58" ry="48" fill="#ffd3e3" stroke="#f2a2c0" stroke-width="3"/>
<path d="M92 76v14M100 74v16M108 76v14" stroke="#f7a8c5" stroke-width="3" stroke-linecap="round"/>
<g class="eyes"><ellipse cx="76" cy="112" rx="5.5" ry="7" fill="#4a2f5e"/><ellipse cx="124" cy="112" rx="5.5" ry="7" fill="#4a2f5e"/><circle cx="78" cy="109" r="2" fill="#fff"/><circle cx="126" cy="109" r="2" fill="#fff"/></g>
<ellipse cx="62" cy="128" rx="9" ry="6" fill="#ff9fc0" opacity=".7"/><ellipse cx="138" cy="128" rx="9" ry="6" fill="#ff9fc0" opacity=".7"/>
<path d="M95 122h10l-5 6z" fill="#ff7fa8"/><path d="M100 128q-5 8-12 3M100 128q5 8 12 3" fill="none" stroke="#4a2f5e" stroke-width="3" stroke-linecap="round"/>
<path d="M54 120l-24-4M54 130l-24 6M146 120l24-4M146 130l24 6" stroke="#c98aa4" stroke-width="2.5" stroke-linecap="round"/>
<path d="M100 200c-9-6-14-10-14-15a7 7 0 0 1 14-3 7 7 0 0 1 14 3c0 5-5 9-14 15z" fill="#ff8db3"/>
</g></svg>`,
cloud:`<svg viewBox="0 0 200 180" role="img" aria-label="Awan biru tersenyum"><g class="bob">
<g fill="#fff" stroke="#9fd0fa" stroke-width="3"><circle cx="62" cy="108" r="30"/><circle cx="102" cy="82" r="40"/><circle cx="144" cy="108" r="28"/><rect x="62" y="108" width="82" height="30" rx="2"/></g>
<g fill="#fff"><circle cx="62" cy="108" r="28.5"/><circle cx="102" cy="82" r="38.5"/><circle cx="144" cy="108" r="26.5"/><rect x="60" y="106" width="86" height="31"/></g>
<g class="eyes"><circle cx="84" cy="104" r="5.5" fill="#34457a"/><circle cx="122" cy="104" r="5.5" fill="#34457a"/><circle cx="86" cy="102" r="2" fill="#fff"/><circle cx="124" cy="102" r="2" fill="#fff"/></g>
<ellipse cx="70" cy="118" rx="9" ry="6" fill="#ffb3cd" opacity=".8"/><ellipse cx="136" cy="118" rx="9" ry="6" fill="#ffb3cd" opacity=".8"/>
<path d="M95 114q8 8 16 0" fill="none" stroke="#34457a" stroke-width="3" stroke-linecap="round"/>
</g></svg>`,
star:`<svg viewBox="0 0 200 200" role="img" aria-label="Bintang kuning tersenyum"><g class="bob">
<path d="M100 22l23 52 56 6-42 38 12 55-49-29-49 29 12-55-42-38 56-6z" fill="#ffe28f" stroke="#f3c04f" stroke-width="4" stroke-linejoin="round"/>
<g class="eyes"><circle cx="84" cy="104" r="5" fill="#5a4320"/><circle cx="116" cy="104" r="5" fill="#5a4320"/></g>
<ellipse cx="74" cy="116" rx="8" ry="5" fill="#ffadc8" opacity=".8"/><ellipse cx="126" cy="116" rx="8" ry="5" fill="#ffadc8" opacity=".8"/>
<path d="M93 114q7 7 14 0" fill="none" stroke="#5a4320" stroke-width="3" stroke-linecap="round"/>
</g></svg>`,
bulb:`<svg viewBox="0 0 200 190" role="img" aria-label="Bohlam kuning pemberi petunjuk"><g class="bob">
<path d="M100 14v14M42 38l10 10M158 38l-10 10M22 92h14M164 92h14" stroke="#f7c95c" stroke-width="5" stroke-linecap="round"/>
<path d="M100 34a52 52 0 0 0-30 94c6 5 9 11 9 18h42c0-7 3-13 9-18a52 52 0 0 0-30-94z" fill="#ffeaa3" stroke="#f3c04f" stroke-width="4"/>
<rect x="78" y="146" width="44" height="14" rx="6" fill="#e3e9f8" stroke="#b5c1e0" stroke-width="3"/><rect x="84" y="160" width="32" height="12" rx="6" fill="#e3e9f8" stroke="#b5c1e0" stroke-width="3"/>
<g class="eyes"><circle cx="84" cy="92" r="5" fill="#5a4320"/><circle cx="116" cy="92" r="5" fill="#5a4320"/></g>
<ellipse cx="74" cy="106" rx="8" ry="5" fill="#ffadc8" opacity=".8"/><ellipse cx="126" cy="106" rx="8" ry="5" fill="#ffadc8" opacity=".8"/>
<path d="M93 104q7 7 14 0" fill="none" stroke="#5a4320" stroke-width="3" stroke-linecap="round"/>
</g></svg>`
};
const ch=(n,c)=>CHARS[n].replace("<svg",`<svg class="${c||""}"`);
