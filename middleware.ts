import {NextResponse} from "next/server";

export function middleware(request : Request): NextResponse {
    return NextResponse.next();
}
