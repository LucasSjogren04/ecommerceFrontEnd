export default async function AdminProductTable() {
    
    return(
        <tbody className="bg-white">
            {invoices?.map((invoice) => (
                <tr
                    key={invoice.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                            <Image
                                src={invoice.image_url}
                                className="rounded-full"
                                width={28}
                                height={28}
                                alt={`${invoice.name}'s profile picture`}
                            />
                            <p>{invoice.name}</p>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                        {invoice.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                        {formatCurrency(invoice.amount)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                        {formatDateToLocal(invoice.date)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                        <InvoiceStatus status={invoice.status} />
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex justify-end gap-3">
                            <UpdateInvoice id={invoice.id} />
                            <DeleteInvoice id={invoice.id} />
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>)
}