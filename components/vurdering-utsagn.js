export default function Vurdering({ tekst, utsagn }) {
    return (
        <div className="flex justify-between py-2 mx-6">
            <p>{tekst}</p>
            {icon(utsagn)}
        </div>
    )
}


function icon(bool) {
    if (bool) return <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 108-.001 8 8 0 008 16zm3.707-9.293a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill="#20DA33"/></svg>
    else return <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 108-.001 8 8 0 008 16zM6.707 5.293a1 1 0 00-1.414 1.414L6.586 8 5.293 9.293a1 1 0 101.414 1.414L8 9.414l1.293 1.293a1 1 0 001.414-1.414L9.414 8l1.293-1.293a1 1 0 00-1.414-1.414L8 6.586 6.707 5.293z" fill="#DA2020"/></svg>
}