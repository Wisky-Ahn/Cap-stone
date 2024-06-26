/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/tFrI0c3uPcr
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function UploadReservationInfor() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div className="text-blue-600 text-3xl font-bold">FNM</div>
        <Avatar>
          <AvatarImage alt="Profile" src="/placeholder.svg?height=40&width=40" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex justify-between mb-6">
        <Button className="w-1/4" variant="outline">
          등록/수정 상황
        </Button>
        <Button className="w-1/4" variant="outline">
          예약 확인
        </Button>
        <Button className="w-1/4" variant="outline">
          입주 현황
        </Button>
      </div>
      <div className="border-t border-b py-6 mb-6">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <Input placeholder="아파트 정보" />
          <Input className="w-full" placeholder="연도 부터" type="text" />
          <Input className="w-full" placeholder="연도 까지" type="text" />
          <Input className="w-full" placeholder="월 부터" type="text" />
          <Input className="w-full" placeholder="월 까지" type="text" />
        </div>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <Input placeholder="이사 날짜" />
          <Input className="w-full" placeholder="일 부터" type="text" />
          <Input className="w-full" placeholder="일 까지" type="text" />
          <Input className="w-full" placeholder="시 부터" type="text" />
          <Input className="w-full" placeholder="시 까지" type="text" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="이사 시간" />
          <Input className="w-full" placeholder="시 부터" type="text" />
          <Input className="w-full" placeholder="시 까지" type="text" />
        </div>
      </div>
      <Button className="w-full">추가</Button>
    </div>
  )
}
