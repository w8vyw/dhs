import { NextResponse } from 'next/server'

// test route

export function GET() {
	return NextResponse.json(
		{
			result1: { test1: 'test1' },
			result2: { test2: 'test2' },
			result3: { test3: 'test3' },
			result4: { test4: 'test4' }
		},
		{ status: 200 }
	)
}
